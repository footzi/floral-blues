<template>
    <div class="Slider" ref="slider">
        <ul
            class="Slider-List"
            :style="{transform:`translateX(${setTransform()}px)`, transition: transition}"
        >
            <slot></slot>
        </ul>
        <slot name="slider-addons"></slot>
    </div>
</template>

<style lang='scss'>
@import './Slider.scss';
</style>

<script>
import { cloneSlide } from './utils';

export default {
    provide() {
        return {$Slider: this};
    },
    props: {
        // кол-во слайдов в одной прокрутке
        itemsToSlide: {
            default: 1,
            type   : Number
        },
        
        // безконечная прокрутка
        infinity: {
            default: false,
            type   : Boolean
        }
    },

    data() {
        return {
            slideWidth: 0,
            indexSlide: this.itemsToSlide,
            transition: ''
        };
    },

    watch: {
        indexSlide() {
            // последний если кол-во показанных равно общему числу
            this.isLastSlide = this.indexSlide === this.counterSlides;
            // первый если кол-во показанных равно кол-ву на 1 слайде
            this.isFirstSlide = this.indexSlide === this.itemsToSlide;

            this.setTransition();
        }
    },

    created() {
        this.initSlides();
    },

    mounted() {
        this.setDefaultValues();
        this.setSlideWidth();
    },

    methods: {
        initSlides() {
            this.slides = this.$slots.default.filter(e => e.componentOptions);

            this.slides.forEach((slide, index) => {
                slide.componentOptions.propsData.index = index + 1;
            });
        },

        setDefaultValues() {
            this.counterSlides = this.slides.length;
            this.startNumberSlide = 1;
            this.isLastSlide = false;
            this.isFirstSlide = false;
        },

        setSlideWidth() {
            this.slideWidth = this.$el.offsetWidth / this.itemsToSlide;
        },

        setTransform() {
            return -this.slideWidth * (this.indexSlide - this.itemsToSlide);
        },

        setTransition() {
            this.transition = "300ms transform";

            setTimeout(() => {
                this.transition = '';
            }, 300);
        },

        next() {
            if (this.counterSlides > this.indexSlide) {
                this.indexSlide = this.indexSlide + this.startNumberSlide;
            }

            if (this.infinity && this.isLastSlide) {
                this.indexSlide = this.itemsToSlide;
            }
        },

        prev() {
            if (this.indexSlide > this.itemsToSlide) {
                this.indexSlide = this.indexSlide - this.startNumberSlide;
            }

            if (this.infinity && this.isFirstSlide) {
                this.indexSlide = this.counterSlides;
            }
        }
    }
};
</script>

