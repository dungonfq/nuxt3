import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  vite: false,
  buildModules: [
    'nuxt-windicss',
    '~/modules/localeRoutes'
  ],
  components: [
    '~/components/common',
  ],
  publicRuntimeConfig: {
    DEFAULT_LOCALE: process.env.DEFAULT_LOCALE
  }
})
