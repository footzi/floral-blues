<template>
    <div>
        <img :src="`../images/design/${size}.jpg`">
    </div>
</template>

<style lang="scss">
    img {
            width: 100%;
        }
</style>

<script>
export default {
    computed: {
        size() {
            return this.$route.params.size;
        }
    }
};
</script>
