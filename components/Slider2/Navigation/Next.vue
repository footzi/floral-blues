<template>
    <div class="Slider-NavigationNext" @click="next">
        <slot></slot>
    </div>
</template>

<script>
export default {
    inject: ['$Slider'],

    methods: {
        next() {
            this.$Slider.next();
        }
    }
};
</script>
