<template>
    <div class="Invite">
        <!-- <div class="Invite-Parallax">
            <Parallax
                :image="'./upload/par1.jpg'"
                :description="'Приглашаю на мастер-классы'"
            />
        </div> -->

        <div class="Invite-Content">
            <div class="Invite-Item">
                <p class="font-size_p2">
                    Хотите <b>своими руками создать украшение или цветок?</b> Приглашаю!
                </p>
            </div>

            <div class="Invite-Item">
                <p class="font-size_p2 text-upperspace">ПОЧЕМУ ВАМ ПОДХОДЯТ ИМЕННО МОИ КУРСЫ?</p>
                <ul>
                    <li>
                        <p class="font-size_p2">Во-первых, Вам не нужно ничего покупать для прохождения МК, все материалы предоставляются.</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style lang='scss'>
    @import './Invite.scss';
</style>

<script>
import Parallax from '../Parallax/Parallax.vue';

export default {components: {Parallax}};
</script>

