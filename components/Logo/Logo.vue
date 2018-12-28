<template>
    <div class="Logo">
        <img class="Logo-Image" src="./Logo.png" alt="Цветочный блюз">
    </div>
</template>

<style lang='scss'>
    .Logo-Image {
        max-width: 57px;

        @media #{$tablet-portrait} {
            max-width: 77px;
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
