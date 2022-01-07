import { ref, readonly } from 'vue'

export default function() {
  const { vueApp, $router } = useNuxtApp()
  const { $i18n } = vueApp.config.globalProperties;
  const { availableLocales } = $i18n
  
  const currentLocale = ref<string>('')

  const changeLocale = (locale: string) => {
    currentLocale.value = locale
    $i18n.locale = locale
  }

  return {
    currentLocale: readonly(currentLocale),
    availableLocales: readonly(availableLocales),
    changeLocale
  }
}
