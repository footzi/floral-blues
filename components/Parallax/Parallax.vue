<template>
    <div class="Parallax">
        <img class="Parallax-Image" :src=image :alt=description>
    </div>
</template>

<style>

</style>

<script>
export default {props: ['image', 'description']};
</script>
