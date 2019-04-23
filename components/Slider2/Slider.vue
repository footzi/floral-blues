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
            default: true,
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
            this.slides = this.$slots.default.filter((item) => {
                return item.componentOptions;
            });

            //this.slides = [...this.slides, ...this.slides, ...this.slides];
            
            // const t = [...this.slides, ...this.slides, ...this.slides];
            // console.log(t);
            //this.slides.push(this.slides[0])
            const before = [];
            const after = [];

           

            this.slides.forEach((item) => {
                before.push(item);
                after.push(item);
            });

            const slides = [...before, ...this.slides, ...after];

           console.log(slides);
           

            slides.forEach((slide, index) => {
                slide.componentOptions.propsData.index = index + this.itemsToSlide;
                // console.log(this.slide);
            });

            this.$slots.default = slides;
            // this.slides = slides;
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

