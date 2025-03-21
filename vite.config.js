import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueDevTools from 'vite-plugin-vue-devtools';
import svgLoader from 'vite-svg-loader';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    svgLoader({
      defaultImport: 'raw',
      svgoConfig: {
        multipass: true,
        plugins: [
          {
            name: 'preset-default',
            params: {
              overrides: {
                removeViewBox: false,
              },
            },
          },
        ],
      },
    }),
  ],
  build: {
    commonjsOptions: {
      include: [/node_modules/],
    },
  },
  optimizeDeps: {
    // 开发时 解决这些commonjs包转成esm包
    include: [
      '@jiaminghi/c-render',
      '@jiaminghi/c-render/lib/plugin/util',
      '@jiaminghi/charts/lib/util/index',
      '@jiaminghi/charts/lib/util',
      '@jiaminghi/charts/lib/extend/index',
      '@jiaminghi/charts',
      '@jiaminghi/color',
    ],
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});