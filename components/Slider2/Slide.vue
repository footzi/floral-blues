<template>
    <li
        :style="{width: `${width}px`}"
        :class="['Slider-Slide', {
            'is-prev': isPrevClass,
            'is-active': isActiveClass,
            'is-next': isNextClass
        }]"
    >
        <slot></slot>
    </li>
</template>

<script>
export default {
    inject: ['$Slider'],

    props: {
        index: {
            type   : Number,
            default: 1
        }
    },

    computed: {
        width() {
            return this.$Slider.slideWidth;
        },

        isPrevClass() {
            // разница между количеством показанных слайдов и порядковым номером, должна быть больше чем
            // элементов на 1 слайде
            const diff = this.$Slider.indexSlide - this.index;

            return diff >= this.$Slider.itemsToSlide;
        },

        isActiveClass() {
            // разница между количеством показанных слайдов и порядковым номером, должна быть меньше чем
            // элементов на 1 слайде, но больше чем 0;
            const diff = this.$Slider.indexSlide - this.index;
            const start = 0;

            // console.log(this.$Slider.indexSlide);
            

            return diff < this.$Slider.itemsToSlide && diff >= start;
        },

        isNextClass() {
            // разница между количеством показанных слайдов и порядковым номером, должна быть меньше чем
            // элементов на 1 слайде, и меньше чем 0;
            const diff = this.$Slider.indexSlide - this.index;
            const start = 0;

            return diff < this.$Slider.itemsToSlide && diff < start;
        }
    }
};
</script>
