<template>
	<div class="Home">
		<!-- <section class="Home-CatalogPreview">
			<Catalog :preview="true"/>
		</section>
		<section class="Home-AboutMe">
			<AboutMe />
		</section>
		<section class="Home-Questions">
			<Questions />
		</section>
		<section class="Home-Invite">
			<Invite />
		</section> -->
		<section class="Home-Reviews">
			<Reviews />
		</section>
	</div>
</template>

<style lang='scss'>
@import './index.scss';
</style>

<script>
import AboutMe from '../components/AboutMe/AboutMe';
import Catalog from '../components/Catalog/Catalog';
import Invite from '../components/Invite/Invite';
import Questions from '../components/Questions/Questions';
import Reviews from '../components/Reviews/Reviews';


export default {
    components: {
        Catalog,
        AboutMe,
        Questions,
        Invite,
        Reviews
    }
};
</script>
