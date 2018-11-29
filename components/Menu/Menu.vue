<template>
    <div class="Menu">
        <!-- <ul class="Menu-List" v-for="item in menu" :key="item.id">
            <li class="Menu-Item">
                <nuxt-link :to=item.href>{{item.name}}</nuxt-link>
            </li>
        </ul> -->
    </div>
</template>

<style lang="scss">
    .Menu-List {
        display: flex;
    }

    .Menu-Item {
       font-size: 25px;
       color: $black;
       margin-right: 80px;

        &:last-child {
            margin-right: 0;
        }
    }
</style>

<script>
export default {
    
}
</script>

