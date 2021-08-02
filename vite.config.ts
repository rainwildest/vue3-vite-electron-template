import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

export default defineConfig((env) => {
  const { mode } = env;
  return {
    base: "./",
    plugins: [vue(), vueJsx()]
  };
});
