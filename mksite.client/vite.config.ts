import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import plugin from '@vitejs/plugin-react';
import { env } from 'process';
import basicSsl from '@vitejs/plugin-basic-ssl'



const isProd = process.env.NODE_ENV === 'production';
const target = isProd ? 'https://your-azure-backend-url.azurewebsites.net' : 
    (env.ASPNETCORE_HTTPS_PORT ? `https://localhost:${env.ASPNETCORE_HTTPS_PORT}` :
    env.ASPNETCORE_URLS ? env.ASPNETCORE_URLS.split(';')[0] : 'https://localhost:7012');

export default defineConfig({
    build: {
        watch: null
    },
    plugins: [plugin(), basicSsl()],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
    server: {
        proxy: {
            '^/experience': {
                target,
                secure: isProd // Set secure to true in production
            },
            '^/about': {
                target,
                secure: isProd // Set secure to true in production
            }
        },
        port: 5173
    }
});
