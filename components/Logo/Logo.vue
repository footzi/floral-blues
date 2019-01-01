<template>
    <div class="Logo">
        <img class="Logo-Image" src="./Logo.png" alt="Цветочный блюз">
    </div>
</template>

<style lang='scss'>
    .Logo-Image {
        max-width: 60px;

        @media #{$tablet-portrait} {
            max-width: 106px;
        }

        @media #{$tablet-landscape} {
            max-width: 144px;
        }

        @media #{laptop} {
            max-width: 170px;
        }

        @media #{$fullhd} {
            max-width: 210px;
        }
    }
</style>
