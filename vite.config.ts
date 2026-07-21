import path from "path"
import fs from "fs"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig, type Plugin } from "vite"

function htmlInjectPlugin(): Plugin {
  return {
    name: "html-inject-plugin",
    transformIndexHtml(html) {
      return html.replace(/<!--\s*include:(.*?)\s*-->/g, (_, filePath) => {
        const fullPath = path.resolve(__dirname, filePath.trim())
        if (fs.existsSync(fullPath)) {
          return fs.readFileSync(fullPath, "utf-8")
        }
        return ""
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [htmlInjectPlugin(), react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
