<template>
    <footer class="Footer">
        <div class="Footer-Content">
            <div class="Footer-Logo">
                <Logo />
            </div>

            <div class="Footer-Menu">
                <Menu modify="Menu_theme_footer"/>
            </div>

            <div class="Footer-Contacts">
                <div class="Footer-ContactsLabel">Связаться с нами:</div>
                <ul class="Footer-ContactsList">
                    <li>г. Нижний Новгород</li>
                    <li>Тел. +79531733297</li>
                    <li>specy91@rambler.ru</li>
                </ul>
            </div>

            <div class="Footer-Agreement">
                <p class="Footer-AgreementTitle">Условия использования материалов данного ресурса:</p>
                <p>Все фотографии используемые на данном ресурсе являются собственностью Агафоновой Галины.</p>
                <p>Запрещено использование любого контента с этого сайта с целью получения коммерческой выгоды.</p>
                <p>При размещении материалов на сторонних ресурсах  обязательна ссылка на
                    первоночальный ресурс-источник.</p>
            </div>

            <div class="Footer-Dev">
                <p>Дизайн и разработка:</p>
            </div>

            <div class="Footer-Social">
                <Social :modify="'Social_theme_footer'"/>
            </div>
        </div>

        <div class="Footer-VK">
            <img src="/images/vk1-300x252.png">
        </div>
    </footer>
</template>

<style lang="scss">
@import './Footer.scss';
</style>

<script>
import Logo from '../Logo/Logo';
import Menu from '../Menu/Menu';
import Social from '../Social/Social';

export default {
    components: {
        Logo,
        Menu,
        Social
    }
};
</script>
