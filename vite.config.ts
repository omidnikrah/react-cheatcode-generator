import { resolve } from "path";

import react from "@vitejs/plugin-react-swc";
import autoprefixer from "autoprefixer";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import libCss from "vite-plugin-libcss";
import svgr from "vite-plugin-svgr";
import tsconfigPaths from "vite-tsconfig-paths";

import appPackage from "./package.json";

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "./lib/index.tsx"),
      name: appPackage.name,
      fileName: format => `react-cheatcode-generator.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
    sourcemap: true,
    emptyOutDir: true,
  },
  plugins: [
    react(),
    dts({ rollupTypes: true }),
    tsconfigPaths(),
    svgr({
      include: "**/*.svg",
    }),
    libCss(),
  ],
  css: {
    modules: {
      scopeBehaviour: "local",
    },
    postcss: {
      plugins: [autoprefixer],
    },
  },
});
