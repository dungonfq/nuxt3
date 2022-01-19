<template>
	<div class="p-6">
		<div class="text-xl text-green-500">{{ $t('home') }}</div>
		<div class="text-xl text-red-500">Hello {{ user.name }}</div>
		<div class="m-4">
			<img src="/img/logo/footer-roadsurfer.svg" alt="Try to import logo Roadsurfer"/>
		</div>
		<div class="my-2">
			<locale-switcher />
		</div>
		<div class="my-2">
			<button
				class="bg-blue-500 p-4 text-white cursor-pointer"
				@click="fetchUser()"
			>
				{{ $t('common.submit') }}
			</button>
		</div>
		<rs-link to="/booking">
			To booking page
		</rs-link>
	</div>
</template>

<script lang="ts">
import { defineComponent, computed, provide } from 'vue'
import useUser from '~~/composables/useUser'
import LocaleSwitcher from '~/components/LocaleSwitcher.vue'

export default defineComponent({
	layout: 'default',
	components: {
		LocaleSwitcher
	},
	setup () {
		const { $router } = useNuxtApp()
		provide('router', $router)

		const { fetchUser } = useUser()
		const user = computed(() => useUser().user.value )
		return {
			user,
			fetchUser
		}
	},
})
</script>
