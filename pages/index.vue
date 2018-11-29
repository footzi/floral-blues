<template>
	<section class="container">
		<ul v-for="item in menu" :key="item.id">
			<li>{{item.name}}</li>
		</ul>
	</section>
</template>

<script>

export default {
	asyncData({app}) {
		return app.$axios.$get('/api/client/menu')
			.then((res) => {
				return { menu: res }
			})
	}
}
</script>
