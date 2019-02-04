<template>
	<div class="Home">
		<div class="Home-CatalogPreview">
			<Catalog :preview="true"/>
		</div>
		<div class="Home-AboutMe">
			<AboutMe />
		</div>
		<div class="Home-Questions">
			<Questions />
		</div>
	</div>
</template>

<style lang='scss'>
@import './index.scss';
</style>

<script>
import AboutMe from '../components/AboutMe/AboutMe';
import Catalog from '../components/Catalog/Catalog';
import Questions from '../components/Questions/Questions';
export default {
    components: {
        Catalog,
        AboutMe,
        Questions
    }
};
</script>
