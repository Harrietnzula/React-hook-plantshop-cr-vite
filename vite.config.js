import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    hmr: {
      port: 5173, // match your dev server port
    },
    watch: {
      usePolling: true, // helps in Docker/VMs/WSL
    },
  },
});