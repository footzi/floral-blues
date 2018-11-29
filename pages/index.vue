<template>
	<div class="Index">
		<Header />
		<!-- <ul v-for="item in menu" :key="item.id">
			<li>{{item.name}}</li>
		</ul> -->
	</div>
</template>

<script>
import Header from '../components/Header/Header';

export default {
	components: {
		Header
	},

	asyncData({app}) {
		return app.$axios.$get('./stub.json')
			.then((res) => {
                console.log(res);
				return { menu: res }
			})
	}
}
</script>
