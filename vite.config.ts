import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@components': resolve(__dirname, 'src/components'),
      '@pages': resolve(__dirname, 'src/pages'),
      '@services': resolve(__dirname, 'src/services'),
      '@styles': resolve(__dirname, 'src/styles'),
      '@types': resolve(__dirname, 'src/types'),
      '@utils': resolve(__dirname, 'src/utils'),
    },
  },
  css: {
    postcss: {
      plugins: [
        {
          postcssPlugin: 'internal:charset',
          prepare: () => ({
            OnceExit: () => ({
              atrule: {
                charset: (atrule) => {
                  atrule.remove();
                },
              },
            }),
          }),
        },
      ],
    },
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/styles/index.scss";`,
      },
    },
  },
  build: {
    outDir: 'dist',
  },
});

```