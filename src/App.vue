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

#app {
    font-family: sans-serif;
    display: flex;
    justify-content: center;    /* 水平方式对齐方式 */
    align-items: center;    /* 垂直方向对齐方式 */
    //height: 100vh;
    //overflow: hidden;   /* 防止Safari出现水平滚动条 */
    margin: 0;
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
