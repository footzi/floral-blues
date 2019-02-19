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
		<div class="Home-Invite">
			<Invite />
		</div>
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

export default {
    components: {
        Catalog,
        AboutMe,
        Questions,
        Invite
    }
};
</script>
