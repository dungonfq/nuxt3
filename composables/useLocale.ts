import { ref, readonly } from 'vue'

export default function() {
  const { vueApp } = useNuxtApp()
  const { $i18n } = vueApp.config.globalProperties;
  const currentLocale = ref<string>($i18n.locale)

  return {
    currentLocale: readonly(currentLocale),
    availableLocales: readonly($i18n.availableLocales)
  }
}
