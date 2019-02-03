<template>
	<div class="Home">
		<div class="Home-CatalogPreview">
			<Catalog :preview="true"/>
		</div>
		<div class="Home-AboutMe">
			<AboutMe />
		</div>
	</div>
</template>

<style lang='scss'>
@import './index.scss';
</style>

<script>
import AboutMe from '../components/AboutMe/AboutMe';
import Catalog from '../components/Catalog/Catalog';
export default {
    components: {
        Catalog,
        AboutMe
    }
};
</script>
