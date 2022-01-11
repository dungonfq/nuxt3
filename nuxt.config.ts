import { defineNuxtConfig } from 'nuxt3'
import { resolve } from 'path'

const getPage = (path: string) => resolve(__dirname, `pages/${path}.vue`)
const localeRoutes = [
  {
    name: 'locale',
    path: '/:locale(de|en|es)?',
    file: getPage('index'),
  },
  {
    name: 'locale-booking',
    path: '/:locale(de|en|es)?/booking',
    file: getPage('booking'),
  }
]

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  vite: false,
  buildModules: [
    'nuxt-windicss'
  ],
  hooks: {
    'pages:extend' (pages) {
      pages.push(...localeRoutes)
    }
  },
  components: [
    '~/components/common',
  ],
  publicRuntimeConfig: {
    DEFAULT_LOCALE: process.env.DEFAULT_LOCALE
  }
})
