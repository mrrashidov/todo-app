import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import svgLoader from "vite-svg-loader";

// @ts-ignore
import path from "path";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), svgLoader()],
  resolve: {
    alias: [
      {
        find: "@",
        replacement: path.resolve(__dirname, "./src"),
      },
      {
        find: "@layouts",
        replacement: path.resolve(__dirname, "./src/components/layouts"),
      },
      {
        find: "@img",
        replacement: path.resolve(__dirname, "./src/assets/img"),
      },
      {
        find: "@icons",
        replacement: path.resolve(__dirname, "./src/components/icons"),
      },
    ],
  },
  base: "./",
  server: {
    host: "0.0.0.0",
    port: 4500,
    open: false,
    cors: true,
  },
});

svgLoader({
  svgoConfig: {
    multipass: true,
  },
});
