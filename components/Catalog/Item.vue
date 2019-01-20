<template>
    <nuxt-link :to=props.link class="Catalog-Item">
        <img class="Catalog-ItemImage" :src=props.image :alt=props.name>
        <div class="Catalog-ItemContent">
            <div class="Catalog-ItemHeader">
                <div class="Catalog-ItemCategory">{{ props.category }}</div>
                <div class="Catalog-ItemName">{{ props.name }}</div>
                <div class="Catalog-ItemSeparator"></div>
            </div>
            <div class="Catalog-ItemButton">
                <Button
                    :name="'Подробнее'"
                    :modify="'Button_theme_catalog-preview'"
                    :to=props.link
                />
            </div>
        </div>
    </nuxt-link>
</template>

<script>
import Button from '../Button/Button';

export default {
    props     : ['props'],
    components: {Button}
};
</script>

