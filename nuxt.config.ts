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
  buildModules: [
    'nuxt-windicss',
    '@intlify/nuxt3'
  ],
  hooks: {
    'pages:extend' (pages) {
      pages.push(...localeRoutes)
    }
  },
  intlify,
  components: [
    '~/components/common',
  ]
})
