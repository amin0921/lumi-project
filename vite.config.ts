import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    plugins: [
      react(),
      tailwindcss(),
      {
        name: 'serve-dist-bundle',
        configureServer(server) {
          server.middlewares.use((req, res, next) => {
            if (req.url === '/download/index.html' || req.url === '/dist/index.html' || req.url === '/download') {
              const filePath = path.resolve(__dirname, 'dist/index.html');
              if (fs.existsSync(filePath)) {
                res.setHeader('Content-Type', 'text/html; charset=utf-8');
                res.setHeader('Content-Disposition', 'attachment; filename="index.html"');
                res.end(fs.readFileSync(filePath));
                return;
              }
            }
            next();
          });
        },
      },
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
