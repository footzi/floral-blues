<template>
  <div class="Layout">
	<Header />
    <main>
		<nuxt/>
	</main>
	<footer></footer>
  </div>
</template>

<style lang='scss'>

.Layout {
	@include suffix(2, 36);
	@include prefix(2, 36);
}
</style>

<script>
import Header from '../components/Header/Header';

export default {components: {Header}};
</script>
