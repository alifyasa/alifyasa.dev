import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import solidJs from "@astrojs/solid-js";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  output: "hybrid",
  integrations: [tailwind(), solidJs()],
  adapter: cloudflare({
    mode: "directory",
    functionPerRoute: true,
    routes: {
      strategy: "exclude",
    },
    runtime: {
      mode: "local",
    },
  }),
});
