import path from 'node:path';
import { defineConfig } from 'vite';

export default defineConfig(({ mode }) => {
  const isDev = mode === 'development';
  return {
    resolve: {
      alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
    },
    define: {
      __DEV__: isDev,
    },
    optimizeDeps: {
      include: ['./src/core/router/Router.js'],
    },
    build: {
      minify: !isDev,
      sourcemap: isDev,
      chunkSizeWarningLimit: 500,
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['./src/index.js', './src/core/router/Router.js'],
          },
        },
      },
    },
  };
});
