<template>
    <li class="Slide" :style="{width: `${slideWidth}px`}">
        <slot></slot>
    </li>
</template>
<script>
export default {
    inject: ['$Slider'],

    data() {
        return {slideWidth: 0};
    },

    mounted() {
        this.$Slider.$on('init', (options) => {
            this.slideWidth = options.slideWidth;
            console.log(this.slideWidth);
        });
    }
};
</script>

<style>
.Slide {
  flex-shrink: 0;
  height: 100%;
  margin: 0;
  padding: 0;
  list-style: none;
}
</style>
