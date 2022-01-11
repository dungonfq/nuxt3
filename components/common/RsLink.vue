<template>
  <nuxt-link :to="localizedPath">
    <slot />
  </nuxt-link>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import useLocale from '~/composables/useLocale'

export default defineComponent({
  props: {
    to: {
      type: String,
      required: true
    },
  },
  setup (props) {
    const localizedPath = computed(() => {
      let localizedPath = props.to;
      const { currentLocale, availableLocales } = useLocale()

      if (!availableLocales.some((loc: String) => localizedPath.startsWith(`/${loc}`))) {
        localizedPath = `/${currentLocale.value}${props.to}`;
      }

      return localizedPath
    })
    return {
      localizedPath
    }
  },
})
</script>
