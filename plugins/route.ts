import { I18N_COOKIE_NAME } from '~/services/constants'

export default (nuxtApp: any) => {
  const { vueApp, $router } = nuxtApp
  const { $i18n } = vueApp.config.globalProperties;

  $router.beforeEach(async (to: any, from: any, next: Function) => {
    // TODO: handle before change locale
    const locale = to.params.locale
    const isValidLocale = $i18n.availableLocales.some(
      (availableLocale: string) => availableLocale === locale
    )
    if (isValidLocale) {
      $i18n.locale = locale
      document.cookie = `${I18N_COOKIE_NAME}=${locale}`
    }

    return next()
  })

  $router.afterEach((to: any, from: any) => {
    // TODO: handle after change locale
  })
}
