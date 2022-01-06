/**
 * @param {import('@nuxt/types').Context} ctx
 * @param {(key: string, value: any) => void} [inject]
 * @exports i18n:default
 */
export default (ctx, inject) => {
  const { app, store } = ctx
  const defaultLocale = app.i18n.locale || 'de'

  app.i18n.onBeforeLanguageSwitch = (_oldLocale, newLocale) => {
    
  }

  app.i18n.onLanguageSwitched = () => {
    
  }
}
