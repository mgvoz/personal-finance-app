import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/personal-finance-app/",
  // preview: {
  //   allowedHosts: ["4f74lv-4173.csb.app", "4f74lv-5173.csb.app"],
  // },
});
