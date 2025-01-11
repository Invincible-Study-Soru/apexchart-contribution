import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  server: {
    fs: {
      allow: [".."],
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
    },
  },
});
