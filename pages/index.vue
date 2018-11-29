<template>
	<section class="container">
		<h1>Home page</h1>
	</section>
</template>

<script>
import axios from 'axios';

export default {
	data() {
		return {
			menu: ''
		}
	},
	asyncData() {
		axios.get('/api/menu')
			.then((res) => {
				console.log(res);
			})
	}
}
</script>
