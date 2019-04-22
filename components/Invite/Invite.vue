<template>
    <div class="Invite">
        <div class="Invite-Parallax">
            <Parallax
                :image="'./upload/par1.jpg'"
                :description="'Приглашаю на мастер-классы'"
                :scale="0"
            />
        </div>

        <div class="Invite-Content">
            <div class="Invite-Item">
                <p class="font-size_p2">
                    Хотите <b>своими руками создать украшение или цветок?</b> Приглашаю!
                </p>
            </div>

            <div class="Invite-Item">
                <p class="font-size_p2 text-upperspace">ПОЧЕМУ ВАМ ПОДХОДЯТ ИМЕННО МОИ КУРСЫ?</p>

                <ul class="Invite-List list-dot">
                    <li class="Invite-ListItem font-size_p3">
                        Во-первых, Вам не нужно ничего покупать для прохождения МК,
                        все материалы предоставляются.
                    </li>
                    <li class="Invite-ListItem font-size_p3">
                        Во-первых, Вам не нужно ничего покупать для прохождения МК,
                        все материалы предоставляются.
                    </li>
                    <li class="Invite-ListItem font-size_p3">
                        Во-первых, Вам не нужно ничего покупать для прохождения МК,
                        все материалы предоставляются.
                    </li>
                    <li class="Invite-ListItem font-size_p3">
                        Во-первых, Вам не нужно ничего покупать для прохождения МК,
                        все материалы предоставляются.
                    </li>
                    <li class="Invite-ListItem font-size_p3">
                        Во-первых, Вам не нужно ничего покупать для прохождения МК,
                        все материалы предоставляются.
                    </li>
                </ul>

                <div class="Invite-Button">
                    <Button
                        :name="'Узнать подробнее'"
                        :to="'/education'"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<style lang='scss'>
    @import './Invite.scss';
</style>

<script>
import Button from '../Button/Button.vue';
import Parallax from '../Parallax/Parallax.vue';

export default {
    components: {
        Parallax,
        Button
    }
};
</script>

