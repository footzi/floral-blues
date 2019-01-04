<template>
    <button
        :class="['Burger', {'is-mobilemenu-open': mobileMenu}]"
        @click="this.run"
    >
        <span class="Burger-Line" ></span>
        <span class="Burger-Line"></span>
        <span class="Burger-Line"></span>
    </button>
</template>

<style lang='scss'>
@import './Burger.scss';
</style>

<script>
import {mapGetters} from 'vuex';

export default {
    computed: {...mapGetters({mobileMenu: 'GET_STATE_MOBILE_MENU'})},
    methods : {
        run() {
            this.$store.dispatch('mobileMenuChange');
        }
    }
};
</script>

