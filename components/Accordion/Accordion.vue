<template>
    <div class="Accordion">
        <div class="Accordion-Header" @click="run">
            <div class="Accordion-Title">{{ props.name }}</div>
            <div class="Accordion-Arrow" ref="arrow">
                <icon-triangle-bottom />
            </div>
        </div>
        <div class="Accordion-ContentWrap" ref="contentWrap">
            <div class="Accordion-Content" ref="content">
                <!-- Пока только в меню / Если у группы нет детей, то это просто заголовок-->
                <template v-for="item in props.child">
                    <div v-if="!item.child"
                        class="Accordion-ContentGroup Accordion-ContentGroup_theme_nolist"
                        :key="item.id">
                        <nuxt-link
                            class="Accordion-ContentTitle Accordion-ContentLink"
                            :to="item.href">{{ item.name }}
                        </nuxt-link>
                    </div>

                    <div v-else class="Accordion-ContentGroup" :key="item.id">
                        <div class="Accordion-ContentTitle">{{ item.name }}</div>
                        <ul v-for="childItem in item.child" :key="childItem.id" class="Accordion-List">
                            <li class="Accordion-Item">
                                <nuxt-link
                                    class="Accordion-ContentLink"
                                    :to="childItem.href">{{ childItem.name }}
                                </nuxt-link>
                            </li>
                        </ul>
                    </div>
                </template>
            </div>
        </div>
    </div>
</template>

<style lang='scss'>
@import './Accordion.scss';
</style>

<script>
import IconTriangleBottom from '../Icons/IconTriangleBottom';

export default {
    props: ['props'],

    data: () => {
        return {state: 'close'};
    },

    components: {IconTriangleBottom},

    mounted() {
        this.init();
    },

    methods: {
        /**
         * Метод инициализирует модуль
         */
        init() {
            this.content = this.$refs.content;
            this.contentWrap = this.$refs.contentWrap;
            this.arrow = this.$refs.arrow;
            this.height = this.content.offsetHeight;

            this.activeLink();
        },

        /**
         * Метод срабатывает при клике на шапку, и вызывает в зависимости от состояния компонента соответствующий метод
         * @returns {function} - если аккордион закрыт, то открывает его, если нет то закрывает
         */
        run() {
            return this.state === 'close' ? this.open() : this.close();
        },

        /**
         * Метод открывает аккордион
         */
        open() {
            this.contentWrap.style.height = `${this.height}px`;
            this.state = 'open';
            this.$el.classList.add('is-open');
        },

        /**
         * Метод закрывает аккордион
         */
        close() {
            const zeroHeight = 0;

            this.contentWrap.style.height = `${zeroHeight}px`;
            this.state = 'close';
            this.$el.classList.remove('is-open');
        },

        /**
         * Метод проверяет есть ли активная ссылка роутера внутри компонента
         */
        activeLink() {
            const activeLink = this.$el.querySelector('.nuxt-link-active');

            if (activeLink) {
                this.$el.classList.add('is-link-active');
            } else {
                this.$el.classList.remove('is-link-active');
            }
        }
    },

    watch: {
        $route() {
            this.$nextTick(() => {
                this.activeLink();
                this.close();
            });
        }
    }
};
</script>

