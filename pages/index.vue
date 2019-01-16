<template>
	<div class="Home">
		<div class="Home-CatalogPreview">
			<Catalog :preview="true"/>
		</div>
	</div>
</template>

<style lang='scss'>
@import './index.scss';
</style>

<script>
import Catalog from '../components/Catalog/Catalog';
export default {components: {Catalog}};
</script>
