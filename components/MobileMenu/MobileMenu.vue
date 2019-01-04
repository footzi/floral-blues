<template>
    <div :class="['MobileMenu', {'is-open': state}]">
        <div class="MobileMenu-Close" @click="this.close">
            <icon-close />
        </div>
        <p class="MobileMenu-Title">Цветы, которые будут радовать вас <br> очень долго!</p>
        <div class="MobileMenu-Content">
            <Menu modify="Menu_theme_mobile" />
        </div>
        <div class="MobileMenu-Social">
            <Social />
        </div>
    </div>
</template>

<style lang='scss'>
@import './MobileMenu.scss';
</style>

<script>
import {disableBodyScroll, enableBodyScroll} from 'body-scroll-lock';
import IconClose from '../Icons/IconClose.vue';
import {mapGetters} from 'vuex';
import Menu from '../Menu/Menu.vue';
import Social from '../Social/Social.vue';

export default {
    components: {
        IconClose,
        Menu,
        Social
    },

    computed: {...mapGetters({state: 'GET_STATE_MOBILE_MENU'})},

    methods: {
        close() {
            this.$store.dispatch('mobileMenuChange');
        }
    },

    watch: {
        state() {
            return this.state ? disableBodyScroll(this.$el) : enableBodyScroll(this.$el);
        }
    }
};
</script>

