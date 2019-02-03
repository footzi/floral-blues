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
                :to="'/catalog'"
            />
        </div>
        <div class="Catalog-PreviewDescription font-size_p1">
             <p>Возможно исполнение <strong>индивидуальных</strong>
                заказов под  <strong>Ваш образ</strong>.<br>
                Смело описывайте свои идеи и я постараюсь воплотить их в жизнь!
            </p>
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

