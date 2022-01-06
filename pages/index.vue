<template>
	<div class="p-6">
		Hello <span class="text-xl text-green-500">{{ $t('booking.step.select_vehicle') }}</span>
		<div class="my-2">
			<select class="p-3 border border-gray-200" v-model="$i18n.locale">
				<option
					v-for="locale in $i18n.availableLocales"
					:key="`locale-${locale}`"
					:value="locale">{{ locale }}
				</option>
			</select>
		</div>
		<div class="my-2">
			<button
				class="bg-blue-500 p-4 text-white cursor-pointer"
				@click="fetch"
			>
				Fetch
			</button>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	layout: 'default',
	setup(props) {

	},
	methods: {
		fetch () {
			this.$api.user.getUser()
		}
	}
})
</script>
