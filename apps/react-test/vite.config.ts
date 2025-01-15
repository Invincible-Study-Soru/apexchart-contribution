import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

const apexchartsPath = path.resolve(__dirname, "../../packages/apexcharts/src");

export default defineConfig({
  plugins: [
    react(),
    {
      name: "vite-apexcharts-auto-raw-svg",
      enforce: "pre",
      transform(code, id) {
        if (id.startsWith(apexchartsPath)) {
          return code.replace(
            /(\bimport\s+[\w\d{}*,\s]+from\s+["'].*\.svg)(["'])/g,
            "$1?raw$2"
          );
        }
        return code;
      },
    },
  ],

  server: {
    fs: {
      allow: ["../../"],
    },
  },
  resolve: {
    alias: {
      "react-apexcharts": path.resolve(
        __dirname,
        "../../packages/react-apexcharts/src/react-apexcharts.jsx"
      ),
      apexcharts: path.resolve(
        __dirname,
        "../../packages/apexcharts/src/apexcharts.js"
      ),
      "@types/apexcharts": path.resolve(
        __dirname,
        "../../packages/apexcharts/types/apexcharts.d.ts"
      ),
      "./assets/apexcharts.css": "./assets/apexcharts.css?inline",
    },
  },
});
