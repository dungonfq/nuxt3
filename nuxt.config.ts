import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
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
