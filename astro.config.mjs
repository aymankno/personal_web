// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://aymankno.github.io",
  base: "/personal_web",
  vite: {
    plugins: [tailwindcss()],
  },
});