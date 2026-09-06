/**
 * Cloudflare Pages middleware — Markdown content negotiation.
 *
 * When a request carries `Accept: text/markdown` (e.g. from an AI agent),
 * serve /index.md with the correct Content-Type instead of the HTML SPA.
 * All other requests pass through unchanged, but always receive
 * `Vary: Accept` so that caches never conflate the HTML and Markdown variants.
 *
 * Ref: https://developers.cloudflare.com/pages/functions/middleware/
 */

interface Env {}

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

export const onRequest: PagesFunction<Env> = async (context) => {
  const { request, next } = context;

  const accept = request.headers.get("Accept") ?? "";
  const wantsMarkdown =
    accept.includes("text/markdown") || accept.includes("text/x-markdown");

  if (!wantsMarkdown) {
    // Pass through to the normal HTML SPA, but tag the response with
    // Vary: Accept so caches store HTML and Markdown as separate variants.
    const htmlResponse = await next();
    const newHeaders = new Headers(htmlResponse.headers);
    addVaryAccept(newHeaders);
    return new Response(htmlResponse.body, {
      status: htmlResponse.status,
      statusText: htmlResponse.statusText,
      headers: newHeaders,
    });
  }

  // Fetch the pre-built static markdown file from the same origin.
  const mdUrl = new URL("/index.md", request.url);
  const mdResponse = await fetch(
    new Request(mdUrl.toString(), { headers: { Accept: "text/plain" } }),
  );

  if (!mdResponse.ok) {
    // Markdown file missing — fall back to the normal HTML response.
    const htmlResponse = await next();
    const newHeaders = new Headers(htmlResponse.headers);
    addVaryAccept(newHeaders);
    return new Response(htmlResponse.body, {
      status: htmlResponse.status,
      statusText: htmlResponse.statusText,
      headers: newHeaders,
    });
  }

  const body = await mdResponse.text();
  const tokenEstimate = Math.round(new TextEncoder().encode(body).length / 4);

  return new Response(body, {
    status: 200,
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Vary": "Accept",
      "x-markdown-tokens": String(tokenEstimate),
      "Cache-Control": "public, max-age=3600",
    },
  });
};
