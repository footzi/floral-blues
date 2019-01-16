<template>
    <div class="Catalog-Item">
        <img class="Catalog-ItemImage" :src=props.image :alt=props.name>
        <div class="Catalog-ItemContent">
            <div class="Catalog-ItemHeader">
                <div class="Catalog-ItemCategory">{{ props.category }}</div>
                <div class="Catalog-ItemName">{{ props.name }}</div>
                <div class="Catalog-ItemSeparator"></div>
            </div>
            <div class="Catalog-ItemButton">
                <Button :name="'Подробнее'" />
            </div>
        </div>
    </div>
</template>

<script>
import Button from '../Button/Button';

export default {
    props     : ['props'],
    components: {Button}
};
</script>

