<template>
    <div class="Slider-NavigationPrev" @click="prev">
        <slot></slot>
    </div>
</template>

<script>
export default {
    inject: ['$Slider'],

    methods: {
        prev() {
            this.$Slider.prev();
        }
    }
};
</script>
