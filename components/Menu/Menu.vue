<template>
    <div class="Menu">
        <ul class="Menu-List">
            <li class="Menu-Item" v-for="item in data.menu.data" :key="item.id">
                <nuxt-link class="Menu-Link" :to=item.href>{{item.name}}</nuxt-link>
            </li>
        </ul>
    </div>
</template>

<style lang="scss">
@import './Menu.scss';
</style>

<script>
import {mapGetters} from 'vuex';

export default {computed: {...mapGetters({data: 'GET_PAGE_DATA'})}};
</script>
