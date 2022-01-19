import { computed, readonly } from 'vue'
import { useI18n } from 'vue-i18n'

export default function() {
  const i18n = useI18n()
  const currentLocale = computed(() => i18n.locale.value)

  return {
    currentLocale: readonly(currentLocale),
    availableLocales: readonly(i18n.availableLocales)
  }
}
