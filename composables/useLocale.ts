import { ref, readonly } from 'vue'
import { AVAILABLE_LOCALES } from '~/locales'
import { useI18n } from 'vue-i18n'

export default function() {
  const i18n = useI18n()
  const currentLocale = ref<string>(i18n.locale.value)

  return {
    currentLocale: readonly(currentLocale),
    availableLocales: readonly(AVAILABLE_LOCALES)
  }
}
