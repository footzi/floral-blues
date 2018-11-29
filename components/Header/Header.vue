<template>
    <header class="Header">
        <Logo />
        <Social />
        <Menu />
    </header>
</template>

<script>
import Logo from '../Logo/Logo';
import Social from '../Social/Social';
import Menu from '../Menu/Menu';

export default {
    components: {
        Logo,
        Social,
        Menu
    }
}
</script>

