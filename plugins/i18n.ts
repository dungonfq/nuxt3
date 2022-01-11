import { createI18n } from 'vue-i18n'
import { nextTick } from 'vue'
import { AVAILABLE_LOCALES } from '~~/services/constants'

const loadLocaleMessages = async (i18n: any, locale: string) => {
  // load locale messages with dynamic import
  const messages = await import(`~/locales/${locale}.js`)

  // set locale and locale message
  i18n.global.setLocaleMessage(locale, messages.default)

  return nextTick()
}

export function setI18nLanguage(i18n: any, locale: string) {
  if (i18n.mode === 'legacy') {
    i18n.global.locale = locale
  } else {
    i18n.global.locale.value = locale
  }
}

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
  const i18n = createI18n({
    locale: config.DEFAULT_LOCALE || 'en',
    fallbackLocale: 'en',
    numberFormats: {
      en: NUMBER_FORMATS,
      de: NUMBER_FORMATS,
      es: NUMBER_FORMATS
    }
  })

  nuxtApp.vueApp.use(i18n)

  nuxtApp.$router.beforeEach(async (to: any, _from: any, next: Function) => {
    // TODO: handle after change locale
    const paramsLocale = to.params.locale
    // const isValidLocale = locale && i18n.global.availableLocales.some(
    //   (availableLocale: string) => availableLocale === locale
    // )

    if (!AVAILABLE_LOCALES.includes(paramsLocale)) {
      return next(`/${i18n.global.locale}`)
    }

    if (!i18n.global.availableLocales.includes(paramsLocale)) {
      await loadLocaleMessages(i18n, paramsLocale)
    }

    setI18nLanguage(i18n, paramsLocale)
    
    return next()
  })
}
