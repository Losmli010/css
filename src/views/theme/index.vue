<template>
    <div class="demo">
        <h1 class="font-demo">主题色</h1>
        <div class="switcher" @click="changeTheme">换肤</div>
    </div>
</template>

<script>
export default {
    methods: {
        changeTheme() {
            const el = document.querySelector('#app').classList
            const theme = el.value
            if (theme === 'default') {
                el.remove('default')
                el.add('dark')
            } else {
                el.remove('dark')
                el.add('default')
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.demo {
    font-family: $font-family-sans-serif;
    font-size: $font-size-base;
    font-weight: $font-weight-base;
    line-height: $line-height-base;
}
.font-demo {
    font-size: $h1-font-size;
}
.switcher {
    width: 2.472rem;
    height: 2.472rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--module-bg);
    border-left: .309rem solid var(--primary-color);
    border-top-left-radius: 2px;
    color: var(--primary-color);
    opacity: .4;
    cursor: pointer;
    transition: opacity .1s,visibility .1s;

    &:hover {
        opacity: 1;
    }
}
</style>
