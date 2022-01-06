import { defineNuxtConfig } from 'nuxt3'

const NUMBER_FORMATS = {
  currency: {
    style: 'currency', currency: 'EUR', currencyDisplay: 'narrowSymbol', minimumFractionDigits: 2, maximumFractionDigits: 2
  },
  shortCurrency: {
    style: 'currency', currency: 'EUR', currencyDisplay: 'narrowSymbol', minimumFractionDigits: 0, maximumFractionDigits: 0
  },
  number: {
    minimumFractionDigits: 2, maximumFractionDigits: 2
  }
}

const intlify = {
  vueI18n: {
    locale: process.env.DEFAULT_LOCALE || 'de',
    fallbackLocale: 'en',
    numberFormats: {
      en: NUMBER_FORMATS,
      de: NUMBER_FORMATS,
      es: NUMBER_FORMATS
    }
  }
}

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  plugins: ['~/plugins/i18n.ts'],
  buildModules: [
      'nuxt-windicss',
      '@intlify/nuxt3'
  ],
  intlify
})
