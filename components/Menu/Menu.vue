<template>
    <div :class="['Menu', modify]">
        <ul class="Menu-List">
            <li class="Menu-Item" v-for="item in data.menu.data" :key="item.id">
                <template v-if="item.child && modify !='Menu_theme_footer'">
                    <Accordion :props="item"/>
                </template>
                <nuxt-link v-else class="Menu-Link" :to=item.href>{{item.name}}</nuxt-link>
            </li>
        </ul>
    </div>
</template>

<style lang="scss">
@import './Menu.scss';
</style>

<script>
import Accordion from '../Accordion/Accordion';
import {mapGetters} from 'vuex';

export default {
    props     : ['modify'],
    components: {Accordion},
    computed  : {...mapGetters({data: 'GET_PAGE_DATA'})}
};
</script>
