import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import jsx from '@vitejs/plugin-vue-jsx';
import eslintPlugin from 'vite-plugin-eslint';
import styleImport from 'vite-plugin-style-import';
import visualizer from 'rollup-plugin-visualizer';
import { configThemePlugin } from './build/theme';
import { generateModifyVars } from './build';

const isProd = process.env.NODE_ENV === 'production';

const themePlugins = configThemePlugin(isProd);

const plugins = [
  vue(),
  jsx(),
  eslintPlugin(),
  ...themePlugins,
  styleImport({
    libs: [
      {
        libraryName: 'ant-design-vue',
        esModule: true,
        resolveStyle: name => {
          const exclude = [
            'select-option',
            'form-item',
            'collapse-panel',
            'tab-pane',
            'timeline-item',
            'menu-item',
            'input-search',
            'layout-sider',
            'layout-header',
            'layout-content',
            'textarea',
          ];
          return exclude.includes(name) ? '' : `ant-design-vue/es/${name}/style/index`;
        },
      },
    ],
  }),
];

if (process.env.NODE_ENV === 'production') {
  plugins.push(
    visualizer({
      open: true,
      gzipSize: true,
      brotliSize: true,
    })
  );
}
export default defineConfig({
  plugins,
  server: { port: 8080 },
  resolve: { alias: { '@': '/src' } },
  build: {
    sourcemap: false,
    ssr: './src/share/entry-server.ts',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        render: resolve(__dirname, 'share.html'),
      },
      output: {
        inlineDynamicImports: false,
        manualChunks(id) {
          if (id.includes('@codemirror')) {
            return 'codemirror';
          } else if (id.includes('node-forge')) {
            return 'node-forge';
          } else if (id.includes('prettier')) {
            return 'prettier';
          } else if (id.includes('ant-design-vue')) {
            return 'ant-design-vue';
          } else if (id.includes('lodash')) {
            return 'lodash';
          } else if (id.includes('echarts')) {
            return 'echarts';
          } else if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
      },
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: generateModifyVars(),
        javascriptEnabled: true,
      },
    },
  },
});
