<template>
    <div class="Catalog">
        <Preview v-if="preview"/>
    </div>
</template>

<style lang='scss'>
@import './Catalog.scss';
</style>

<script>
import Preview from './Preview';
export default {
    props     : ['preview'],
    components: {Preview}
};
</script>
