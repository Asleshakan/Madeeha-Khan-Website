import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import basicSsl from '@vitejs/plugin-basic-ssl';

const isProd = process.env.NODE_ENV === 'production';
const target = isProd
  ? 'https://kaserverapp-geb4fmazezhscyht.canadacentral-01.azurewebsites.net'
  : `https://localhost:${process.env.ASPNETCORE_HTTPS_PORT || 7012}`;

export default defineConfig({
  plugins: [react(), basicSsl()],
  server: {
    port: 5173,
    proxy: isProd
      ? {}
      : {
          '/api/experience': {
            target,
            secure: false,
            changeOrigin: true
          },
          '/api/about': {
            target,
            secure: false,
            changeOrigin: true
          }
        }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
});
