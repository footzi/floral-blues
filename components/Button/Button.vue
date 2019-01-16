<template>
    <button class="Button">
        <span class="Button-Text">{{ name }}</span>
    </button>
</template>

<style lang='scss'>
    .Button {
        @include transition(background-color, border-color);
        @include reset-button();
        @include reset-link();
        font-size: 18px;
        font-weight: 300;
        color: $white;
        border: 1px solid $white;
        border-radius: 24px;
        padding-top: 7px;
        padding-bottom: 7px;
        padding-right: 40px;
        padding-left: 40px;
        text-align: center;

        @media #{$laptop} {
            &:hover {
                background-color: $accent;
                border-color: $accent;
            }
        }

        @media #{$fullhd} {
            font-size: 23px;
        }
    }

    // .Button_text-size_big {

    // }

    // .Button_text-size_large {

    // }
</style>

<script>
export default {props: ['name']};
</script>
