<template>
  <div>{{ $t('bookingSuccessPage.heading') }}</div>
  <locale-switcher />
</template>

<script lang="ts">
import LocaleSwitcher from '~/components/LocaleSwitcher.vue'

export default defineComponent({
  components: {
		LocaleSwitcher
	},
})
</script>
