<template>
    <router-view />
</template>

<script>
export default {
    mounted() {
        const el = document.querySelector('#app').classList
        el.add('default')
    }
}
</script>

<style lang="scss">
* {
    box-sizing: border-box;
}

#app.default {
    @include default-theme();
}
#app.dark {
    @include dark-theme();
}
#app {
    background: var(--module-bg);
    color: var(--text-color);
}
</style>
