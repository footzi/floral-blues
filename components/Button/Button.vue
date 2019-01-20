<template>
    <nuxt-link
        :class="['Button', modify]"
        :to=to
        :tag=htmlTag
    >
        <span class="Button-Text">{{ name }}</span>
    </nuxt-link>
</template>

<style lang='scss'>
@import './Button.scss';
</style>

<script>
export default {
    props   : ['name', 'to', 'link', 'modify'],
    computed: {
        htmlTag() {
            return this.link ? 'a' : 'button';
        }
    }
};
</script>
