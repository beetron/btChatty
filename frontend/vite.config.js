import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.svg", "robots.txt", "apple-touch-icon.png"],
      manifest: {
        name: "btChatty",
        short_name: "btC",
        description: "Private chat app",
        theme_color: "#ffffff",
        icons: [
          {
            src: "btChatty-Icon-192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "btChatty-Icon-512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
  server: {
    port: 3000,
    proxy: {
      "/api": "http://localhost:5000",
    },
  },
});
