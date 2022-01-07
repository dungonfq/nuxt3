<template>
  <div class="flex">
    <div
      v-for="locale in availableLocales"
      :key="`locale-${locale}`"
      class="mx-1 border-blue-100 text-blue-500 p-2 hover:bg-blue-300 cursor-pointer"
      :class="{ 'bg-blue-300 text-white': currentLocale === locale}"
      @click="changeLocale(locale)"
    >
      <span>{{ locale }}</span>
    </div>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import useLocale from '~~/composables/useLocale'

export default defineComponent({
  setup () {
    const { currentLocale, availableLocales, changeLocale } = useLocale()
    return {
      currentLocale,
      availableLocales,
      changeLocale
    }
  }
})
</script>





