import { defineConfig } from "astro/config";

// https://astro.build/config
import icon from "astro-icon";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://alzeck.github.io",
  // output: "server",
  integrations: [icon()],

  image: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.amazonaws.com",
      },
    ],
  },

  vite: {
    plugins: [tailwindcss()],
  },
});
