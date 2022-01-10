import { ref, readonly } from 'vue'
import { I18N_COOKIE_NAME } from '~/services/constants'

export default function() {
  const { vueApp, $router } = useNuxtApp()
  const { $i18n } = vueApp.config.globalProperties;
  const { availableLocales } = $i18n
  
  const currentLocale = ref<string>($i18n.locale)

  const changeLocale = (locale: string) => {
    currentLocale.value = locale
    $i18n.locale = locale
    document.cookie = `${I18N_COOKIE_NAME}=${locale}`
  }

  return {
    currentLocale: readonly(currentLocale),
    availableLocales: readonly(availableLocales),
    changeLocale
  }
}
