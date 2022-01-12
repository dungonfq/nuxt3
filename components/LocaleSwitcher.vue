<template>
  <div class="flex">
    <rs-link
      v-for="locale in availableLocales"
      :key="`locale-${locale}`"
      :to="getLocalePath(locale)"
      :localized="false"
      class="mx-1 border-blue-100 text-blue-500 p-2 hover:bg-blue-300 cursor-pointer"
      :class="{ 'bg-blue-300 text-white': currentLocale === locale}"
    >
      <span>{{ locale }}</span>
    </rs-link>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue'
import useLocale from '~/composables/useLocale'
import RsLink from '~/components/common/RsLink.vue'

export default defineComponent({
  components: {
    RsLink
  },
  setup () {
    const router = inject<any>('router')
    const { currentLocale, availableLocales } = useLocale()
    const { name, path } = router.currentRoute.value

    const getLocalePath = (locale: String) => {
      const hasLocale = availableLocales.some((loc: string) => path.startsWith(`/${loc}`))
      if (hasLocale) {
        const newLocaleRoute = router.resolve({ name, params: { locale } })
        return newLocaleRoute.path
      } else {
        return `/${locale}${path}`
      }
    }

    return {
      currentLocale,
      availableLocales,
      getLocalePath
    }
  }
})
</script>





