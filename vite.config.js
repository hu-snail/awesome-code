import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import mdPlugin, { Mode } from 'vite-plugin-markdown'
import vitePluginVue from "./plugins/vue-custom-blocks-plugin";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(), 
    mdPlugin({
      mode: [Mode.VUE, Mode.HTML, Mode.TOC],
      markdown: (body, c) => {
        console.log(body, c)
      },
      markdownIt: {
        langPrefix: 'language-',
      }
    }),
    vitePluginVue

  ],
  resolve: {
    // 设置别名
    alias: {
      views: path.resolve(__dirname, 'src/views'),
      styles: path.resolve(__dirname, 'src/styles'),
      docs:  path.resolve(__dirname, 'docs'),
      '@': path.resolve(__dirname, 'src'),
    },
  },
})
