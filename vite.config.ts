// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
  nitro: {
    // Netlify: deploy as Netlify Functions (SSR). Overridable so the
    // Dockerfile can build the standalone node-server preset instead.
    preset: process.env.NITRO_PRESET ?? "netlify",
    // Serve pre-compressed gzip/brotli versions of static assets.
    compressPublicAssets: { gzip: true, brotli: true },
    routeRules: {
      "/**": {
        headers: {
          "X-Content-Type-Options": "nosniff",
          "X-Frame-Options": "DENY",
          "Referrer-Policy": "strict-origin-when-cross-origin",
          "Permissions-Policy": "camera=(), microphone=(), geolocation=()",
        },
      },
    },
  } as {
    preset?: string;
    output?: { dir?: string; publicDir?: string; serverDir?: string };
    cloudflare?: { nodeCompat?: boolean; deployConfig?: boolean };
    compressPublicAssets?: { gzip?: boolean; brotli?: boolean };
    routeRules?: Record<string, unknown>;
  },
});
