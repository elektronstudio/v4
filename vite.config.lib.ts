import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  root: "lib",
  build: {
    outDir: "lib/dist",
    lib: {
      entry: path.resolve(__dirname, "lib/index.ts"),
      name: "elektro",
      formats: ["es", "cjs", "umd"],
      fileName: (format) => {
        const formats = {
          es: "elektro.mjs",
          cjs: "elektro.cjs",
          umd: "elektro.js",
        };
        return formats[format];
      },
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
  },
});
