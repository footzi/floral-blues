<template>
    <div class="Reviews">
        <div class="Reviews-Slider">
            <Slider :numberSlides="6">
                <template slot="slide_1">
                     <div class="Reviews-Item">
                        Отзыв 1
                    </div>
                </template>

                <template slot="slide_2">
                    <div class="Reviews-Item">
                        Отзыв 2
                    </div>
                </template>

                <template slot="slide_3">
                    <div class="Reviews-Item">
                        Отзыв 3
                    </div>
                </template>

                <template slot="slide_4">
                    <div class="Reviews-Item">
                        Отзыв 4
                    </div>
                </template>

                <template slot="slide_5">
                    <div class="Reviews-Item">
                        Отзыв 5
                    </div>
                </template>

                <template slot="slide_6">
                    <div class="Reviews-Item">
                        Отзыв 6
                    </div>
                </template>

                <!-- <template slot="slide_7">
                    <div class="Reviews-Item">
                        Отзыв 7
                    </div>
                </template> -->

                <template slot="prev">
                    <button class="Reviews-NavPrev"> Назад </button>
                </template>

                <template slot="next">
                    <button class="Reviews-NavNext"> Вперед </button>
                </template>

            </Slider>
        </div>
    </div>
</template>

<style lang=scss>
@import './Reviews.scss';
</style>

<script>
import {Slide, Slider} from '../Slider';

export default {
    components: {
        Slider,
        Slide
    }
};
</script>
