import { defineConfig } from "astro/config";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import solidJs from "@astrojs/solid-js";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://alzeck.github.io",
  integrations: [
    tailwind({
      configFile: "./tailwind.config.ts",
      applyBaseStyles: false,
    }),
    solidJs(),
    icon(),
  ],
});
