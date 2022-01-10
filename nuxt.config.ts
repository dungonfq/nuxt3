import { defineNuxtConfig } from 'nuxt3'
import { resolve } from 'path'

const getPage = (path: string) => resolve(__dirname, `pages/${path}.vue`)
const localeRoutes = [
  {
    name: 'locale',
    path: '/:locale(de|en|es)?',
    file: getPage('index'),
  }
]

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  buildModules: [
    'nuxt-windicss',
    '@intlify/nuxt3'
  ],
  hooks: {
    'pages:extend' (pages) {
      pages.push(...localeRoutes)
    }
  },
  intlify
})
