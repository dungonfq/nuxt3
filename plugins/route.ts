export default (nuxtApp: any) => {
  const { vueApp, $router } = nuxtApp
  const { $i18n } = vueApp.config.globalProperties;

  $router.afterEach((to: any, from: any) => {
    // TODO: handle after change locale
    const locale = to.params.locale
    const isValidLocale = locale && $i18n.availableLocales.some(
      (availableLocale: string) => availableLocale === locale
    )

    if (isValidLocale) {
      $i18n.locale = locale
    }
  })
}
