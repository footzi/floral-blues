<template>
    <ul class="PreviewSales">
        <li class="PreviewSales-Item PreviewSales-Favorite">
            <nuxt-link class="PreviewSales-Link" :to="'/test'">
                <img src="/images/Layer_5.png" alt="Изрбанное">
                <span class="PreviewSales-Value">1</span>
            </nuxt-link>
        </li>
        <li class="PreviewSales-Item PreviewSales-Cart">
            <nuxt-link class="PreviewSales-Link" :to="'/test'">
                <img src="/images/Layer_4.png" alt="Корзина">
                <span class="PreviewSales-Value">5</span>
            </nuxt-link>
        </li>
    </ul>
</template>

<style lang="scss">
@import './PreviewSales.scss';
</style>
