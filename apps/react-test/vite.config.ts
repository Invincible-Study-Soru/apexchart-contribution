import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "react-apexcharts": path.resolve(
        __dirname,
        "../../packages/react-apexcharts/src/react-apexcharts.jsx"
      ),
    },
  },
  server: {
    fs: {
      allow: [".."],
    },
  },
});
