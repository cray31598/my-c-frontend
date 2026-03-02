import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5173,
    strictPort: true,
    // Proxy /api to backend. Uses 127.0.0.1 so it works with VPN (loopback bypasses VPN).
    proxy: {
      '/api': {
        target: 'https://myproject-backend-roan.vercel.app/',
        changeOrigin: true,
        secure: false,
      },
    },
    watch: {
      usePolling: false,
    },
  },
})
