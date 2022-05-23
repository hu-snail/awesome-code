import path from 'path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import vitePluginVue from "./plugins/vue-custom-blocks-plugin";
import Markdown from 'vite-plugin-md'
import prism from 'markdown-it-prism'

const markdownWrapperClasses = 'md-container prose prose-sm m-auto text-left'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      views: path.resolve(__dirname, 'src/views'),
      styles: path.resolve(__dirname, 'src/styles'),
      docs:  path.resolve(__dirname, 'docs'),
      markdown:  path.resolve(__dirname, 'markdown'),
      '@': path.resolve(__dirname, 'src'),
    },
  },
  plugins: [
    Vue({ include: [/\.vue$/, /\.md$/],}), 
    Markdown({
      wrapperClasses: markdownWrapperClasses,
      headEnabled: true,
      markdownItUses: [
        prism,
      ],
    }),
    vitePluginVue
  ]
})
