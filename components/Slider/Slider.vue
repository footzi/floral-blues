<template>
    <div class="Slider" ref="slider">
        <ul
            class="Slider-List"
            ref="sliderList"
            :style="{transform:`translateX(${setTransform()}px)`, transition: transition}"
        >
            <li
                v-for="count in counterSlides"
                ref="slide"
                :key="count"
                :style="{width: `${slideWidth}px`}"
                :class="['Slider-Slide', {
                    'is-prev': setIsPrevClass(count),
                    'is-active': setIsActiveClass(count),
                    'is-next': setIsNextClass(count)
                }]"
            >
                <slot :name="'slide_' + setValueSlide(count)"></slot>
            </li>
        </ul>

        <div class="Slider-Navigation">
            <div class="Slider-Next" @click="next()">
                <slot name="next"></slot>
            </div>
            <div class="Slider-Next" @click="prev()">
                <slot name="prev"></slot>
            </div>
        </div>
    </div>
</template>

<style lang='scss'>
@import './Slider.scss';
</style>

<script>
export default {
    provide() {
        return {$Slider: this};
    },
    props: {
        // кол-во слайдов в одной прокрутке
        itemsToSlide: {
            default: 2,
            type   : Number
        },

        // общее число слайдов, нужно для рендера в цикле
        numberSlides: {
            default: 1,
            type   : Number
        },

        infinity: {
            default: true,
            type   : Boolean
        }
    },

    data() {
        return {
            slideWidth : 0,
            shownSlides: 0,
            transition : ''
        };
    },

    mounted() {
        this.startNumberSlide = 1;
        this.shownSlides = this.itemsToSlide;
        this.isLastSlide = false;
        this.isFirstSlide = false;

        //this.counterSlides = this.counterSlides * 2;

        // console.log(this.$refs.slide);
        this.getWidth();
    },

    computed: {
        counterSlides() {
            return this.numberSlides * 2;
        }
    },

    watch: {
        shownSlides() {
            // последний если кол-во показанных равно общему числу
            this.isLastSlide = this.shownSlides === this.counterSlides;
            // первый если кол-во показанных равно кол-ву на 1 слайде
            this.isFirstSlide = this.shownSlides === this.itemsToSlide;


            this.test();
        }
    },

    methods: {
        setValueSlide(count) {
            if (count > this.numberSlides) {
                return count - this.numberSlides;
            } else {
                return count;
            }
            console.log(count);
        },
        
        test() {
            console.log(this.isLastSlide || this.isFirstSlide);

            // if (this.isLastSlide || this.isFirstSlide) {
            //     return;
            // }

            this.transition = "300ms transform";

            setTimeout(() => {
                this.transition = '';
            }, 300);
        },

        getWidth() {
            this.slideWidth = this.$refs.slider.offsetWidth / this.itemsToSlide;
        },

        setTransform() {
            return -this.slideWidth * (this.shownSlides - this.itemsToSlide);
        },

        next() {
            if (this.counterSlides > this.shownSlides) {
                this.shownSlides = this.shownSlides + this.startNumberSlide;
            }

            if (this.infinity && this.isLastSlide) {
                this.shownSlides = this.itemsToSlide;
            }
        },

        prev() {
            if (this.shownSlides > this.itemsToSlide) {
                this.shownSlides = this.shownSlides - this.startNumberSlide;
            }

            if (this.infinity && this.isFirstSlide) {
                this.shownSlides = this.counterSlides;
            }
        },

        setIsPrevClass(item) {
            // разница между количеством показанных слайдов и порядковым номером, должна быть больше чем
            // элементов на 1 слайде
            const diff = this.shownSlides - item;

            return diff >= this.itemsToSlide;
        },

        setIsActiveClass(item) {
            // разница между количеством показанных слайдов и порядковым номером, должна быть меньше чем
            // элементов на 1 слайде, но больше чем 0;
            const diff = this.shownSlides - item;
            const zero = 0;

            return diff < this.itemsToSlide && diff >= zero;
        },

        setIsNextClass(item) {
            // разница между количеством показанных слайдов и порядковым номером, должна быть меньше чем
            // элементов на 1 слайде, и меньше чем 0;
            const diff = this.shownSlides - item;
            const zero = 0;

            return diff < this.itemsToSlide && diff < zero;
        }
    }
};
</script>

