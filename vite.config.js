import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    emptyOutDir: true,
    lib: {
      entry: path.resolve(__dirname, "src/lib.js"),
      name: "vistyleui",
      formats: ["es"],
      fileName: (format) => `vistyleui-lib.${format}.js`,
    },
    rollupOptions: {
      external: ["vue", "vite.svg"],
      output: {
        globals: {
          vue: "Vue",
        },
        exports: "named",
        assetFileNames: (assetInfo) => {
          if (assetInfo.name && assetInfo.name.endsWith(".scss")) {
            return "style.scss"; // 将所有CSS合并为一个文件
          }
          return "assets/index[extname]";
        },
      },
      plugins: [],
    },
    minify: "esbuild",
    cssCodeSplit: true,
    sourcemap: true, // 不生成sourcemap
  },
  esbuild: {
    drop: ["console", "debugger"],
  },
});

// 移除console.log
