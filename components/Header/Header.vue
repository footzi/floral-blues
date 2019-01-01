<template>
    <header class="Header">
        <div class="Header-Social">
            <Social :modify="'Social_theme_header'"/>
        </div>
        <div class="Header-Logo">
            <Logo />
        </div>
        <div class="Header-Content">
            <div class="Header-Menu">
                <Menu />
            </div>
            <div class="Header-PreviewSales">
                <PreviewSales />
            </div>
        </div>
        <div class="Header-Banner">
            <PictureBanner />
        </div>

    </header>
</template>

<style lang="scss">
    @import './Header.scss';
</style>

<script>
import Logo from '../Logo/Logo';
import Menu from '../Menu/Menu';
import PictureBanner from '../PictureBanner/PictureBanner';
import PreviewSales from '../PreviewSales/PreviewSales';
import Social from '../Social/Social';

export default {
    components: {
        Logo,
        Social,
        Menu,
        PreviewSales,
        PictureBanner
    }
};
</script>

