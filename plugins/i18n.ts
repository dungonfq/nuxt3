import { createI18n } from 'vue-i18n'
import { localeMessages, AVAILABLE_LOCALES } from '~/locales'

// const loadLocaleMessages = async (i18n: any, locale: string) => {
//   // load locale messages with dynamic import
//   const messages = await import(`~/locales/${locale}.js`)

//   // set locale and locale message
//   i18n.global.setLocaleMessage(locale, messages.default)

//   return nextTick()
// }

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

export default (nuxtApp: any) => {
  const config = useRuntimeConfig()
  const defaultLocale = config.DEFAULT_LOCALE

  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: defaultLocale,
    fallbackLocale: 'en',
    messages: localeMessages,
    numberFormats: {
      en: NUMBER_FORMATS,
      de: NUMBER_FORMATS,
      es: NUMBER_FORMATS
    }
  })

  // Load default locale
  // loadLocaleMessages(i18n, defaultLocale)

  nuxtApp.vueApp.use(i18n)

  nuxtApp.$router.beforeResolve(async (to: any, _from: any, next: Function) => {
    // TODO: handle after change locale
    const paramsLocale = to.params.locale

    if (!paramsLocale) return next()
  
    if (!AVAILABLE_LOCALES.includes(paramsLocale)) {
      const rawPath = to.fullPath.replace(`/${paramsLocale}`, '')
      return next(`/${defaultLocale}${rawPath}`)
    }

    // if (!i18n.global.availableLocales.includes(paramsLocale)) {
    //   await loadLocaleMessages(i18n, paramsLocale)
    // }

    const { $i18n } = nuxtApp.vueApp.config.globalProperties
    $i18n.locale = paramsLocale
    return next()
  })
  nuxtApp.vueApp.provide('$router', nuxtApp.$router)
}
