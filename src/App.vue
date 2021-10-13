<template>
  <router-view />
</template>

<script>
export default {
  mounted() {
    const el = document.querySelector('#app').classList
    el.add('default')
  },
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
  color: var(--text-color);
  background: var(--module-bg);
}
</style>
