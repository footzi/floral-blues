<template>
	<section class="container">
		<ul v-for="item in menu" :key="item.id">
			<li>{{item.name}}</li>
		</ul>
	</section>
</template>

<script>
import axios from '@/plugins/axios';

export default {
	asyncData() {
		return axios.get('/api/menu')
			.then((res) => {
				return { menu: res.data }
			})
	}
}
</script>
