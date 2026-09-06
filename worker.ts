/**
 * Cloudflare Worker — Markdown content negotiation + static asset serving.
 *
 * This Worker wraps the static-asset bundle built by Vite (dist/).
 * All requests are served from the asset bundle via env.ASSETS, except:
 *
 *   - Requests with `Accept: text/markdown` → fetch /index.md from assets
 *     and return it with Content-Type: text/markdown + Vary: Accept.
 *
 * Every response (HTML or Markdown) also receives Vary: Accept so that
 * Cloudflare's edge cache stores the two variants under separate keys and
 * never serves a stale HTML body to a client that asked for Markdown.
 *
 * Ref: https://developers.cloudflare.com/workers/static-assets/
 */

interface Env {
  ASSETS: Fetcher;
}

/** Merge `Accept` into an existing Vary header without duplicating it. */
function addVaryAccept(headers: Headers): void {
  const existing = headers.get("Vary") ?? "";
  const parts = existing
    .split(",")
    .map((s) => s.trim().toLowerCase())
    .filter(Boolean);
  if (!parts.includes("accept")) {
    headers.set("Vary", existing ? `${existing}, Accept` : "Accept");
  }
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const accept = request.headers.get("Accept") ?? "";
    const wantsMarkdown =
      accept.includes("text/markdown") || accept.includes("text/x-markdown");

    if (wantsMarkdown) {
      // Serve the pre-built Markdown snapshot from the asset bundle.
      const mdUrl = new URL("/index.md", request.url);
      const mdResponse = await env.ASSETS.fetch(new Request(mdUrl.toString()));

      if (mdResponse.ok) {
        const body = await mdResponse.text();
        const tokenEstimate = Math.round(
          new TextEncoder().encode(body).length / 4,
        );
        return new Response(body, {
          status: 200,
          headers: {
            "Content-Type": "text/markdown; charset=utf-8",
            "Vary": "Accept",
            "x-markdown-tokens": String(tokenEstimate),
            "Cache-Control": "public, max-age=3600",
          },
        });
      }

      // index.md missing — fall through to normal HTML response.
    }

    // Serve the static asset (HTML SPA or any other file), stamping
    // Vary: Accept so the cache differentiates HTML from Markdown variants.
    const response = await env.ASSETS.fetch(request);
    const newHeaders = new Headers(response.headers);
    addVaryAccept(newHeaders);
    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers: newHeaders,
    });
  },
};
