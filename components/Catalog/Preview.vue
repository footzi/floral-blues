<template>
    <div class="Catalog-Preview">
        <template v-for="item in test">
            <Item :props="item" :key="item.id"/>
        </template>
    </div>
</template>

<script>
import Item from './Item';

export default {
    components: {Item},
    computed  : {
        test() {
            return [{
                id      : '1',
                category: 'Брошь',
                name    : 'Красное танго',
                image   : '/upload/1.jpg',
                link    : '/test'
            }, {
                id      : '2',
                category: 'Серьги',
                name    : 'Очень красное танго',
                image   : '/upload/2.jpg',
                link    : '/test'
            }, {
                id      : '3',
                category: 'Комплект',
                name    : 'Красное танго и красное танго',
                image   : '/upload/3.jpg',
                link    : '/test'
            }];
        }
    }
};
</script>

