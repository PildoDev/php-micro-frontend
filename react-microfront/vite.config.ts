import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        host: true, // Para permitir conexiones desde otras máquinas en la red local
        port: 5173,
    },
    build: {
        manifest: true,
        outDir: "dist",
    },
});
