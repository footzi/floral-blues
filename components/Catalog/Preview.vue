<template>
    <div class="Catalog-Preview">
        <div class="Catalog-PreviewList">
            <template v-for="item in data.catalogPreview.data">
                <Item
                    :props="item"
                    :key="item.id"/>
            </template>
        </div>
        <div class="Catalog-PreviewButton">
            <Button
                :name="'Каталог'"
                :modify="'Button_text-size_big'"
                :to="'/catalog'"
            />
        </div>
    </div>
</template>

<script>
import Button from '../Button/Button';
import Item from './Item';
import {mapGetters} from 'vuex';

export default {
    components: {
        Button,
        Item
    },
    computed: {...mapGetters({data: 'GET_PAGE_DATA'})}
};
</script>

