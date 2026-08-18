import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
function inlineCss() {
  return {
    name: "inline-css",
    apply: "build",
    enforce: "post",
    generateBundle(_, bundle) {
      for (const name of Object.keys(bundle)) {
        if (!name.endsWith(".css")) continue;
        const css = bundle[name].source;
        for (const htmlName of Object.keys(bundle)) {
          if (!htmlName.endsWith(".html")) continue;
          const link = new RegExp(`<link rel="stylesheet"[^>]*${name}[^>]*>`);
          if (!link.test(bundle[htmlName].source)) continue;
          bundle[htmlName].source = bundle[htmlName].source.replace(
            link,
            `<style>${css}</style>`
          );
          delete bundle[name];
          break;
        }
      }
    },
  };
}

export default defineConfig({
  plugins: [react(), tailwindcss(), inlineCss()],
});
