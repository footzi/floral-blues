<template>
    <div class="Parallax">
        <img class="Parallax-Image"
            :src=image
            :alt=description
            :style="{
                height: `${newHeight}`,
                transform: `translateY(${position}px)`,
                top: `${-offset}px`}"
            ref="image"
        />
    </div>
</template>

<style lang='scss'>
    .Parallax {
        position: relative;
        height: 100%;
        overflow: hidden;
    }

    .Parallax-Image {
        min-width: 100%;
        min-height: 100%;
        object-fit: cover;
        position: absolute;
        top: 0;
        left: 0;
    }
</style>

<script>
import inViewport from '../../assets/scripts/inViewport.js';

export default {
    props: ['image', 'description', 'scale'],
    data : () => {
        return {
            position : 0,
            newHeight: '100%',
            offset   : 0
        };
    },

    mounted() {
        this.setHeight();

        window.addEventListener('resize', () => {
            this.setHeight();
        });
    },

    methods: {
        setHeight() {
            if (!this.scale) {
                return;
            }

            const height = this.$refs.image.offsetHeight;
            const scaleHeight = height * this.scale;

            this.offset = scaleHeight - height;
            this.newHeight = `${scaleHeight}px`;

            const limit = this.offset / (height + window.innerHeight);
            let start = 0;

            window.addEventListener('scroll', () => {
                const scroll = window.pageYOffset;

                if (inViewport(this.$refs.image)) {
                    if (!start) {
                        start = scroll;
                    }

                    this.position = (scroll - start) * limit;
                }
            });
        }
    }
};
</script>
