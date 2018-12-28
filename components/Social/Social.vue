<template>
    <div :class="['Social', modify]">
        <ul class="Social-List">
            <li class="Social-Item" v-for="item in data.social.data" :key="item.id">
                <a :href="item.href">
                    <img class="Social-Icon" :src=item.image>
                </a>
            </li>
        </ul>
    </div>
</template>

<style lang="scss">
@import './Social.scss';
</style>

<script>
import {mapGetters} from 'vuex';

export default {
    props   : ['modify'],
    computed: {...mapGetters({data: 'GET_PAGE_DATA'})}
};
</script>
