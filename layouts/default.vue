<template>
	<div :class="['Layout', {'is-mobilemenu-open': mobileMenu}]">
		<div class="Layout-MobileMenu">
			<MobileMenu />
		</div>
		<div :class="['Layout-Content', {'is-mobilemenu-open': mobileMenu}]">
			<Header />
			<main>
				<nuxt/>
			</main>
			<footer></footer>
		</div>
	</div>
</template>

<style lang='scss'>
@import './default.scss';
</style>

<script>
import Header from '../components/Header/Header';
import {mapGetters} from 'vuex';
import MobileMenu from '../components/MobileMenu/MobileMenu';

export default {
    components: {
        Header,
        MobileMenu
    },

    computed: {...mapGetters({mobileMenu: 'GET_STATE_MOBILE_MENU'})}
};
</script>
