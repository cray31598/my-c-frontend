import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5173,
    strictPort: true,
    // Avoid proxy issues when VPN is on: use 127.0.0.1 in browser if localhost fails
    watch: {
      usePolling: false,
    },
  },
})
