<template>
  <router-view v-slot="{ Component }">
    <transition name="slide-right" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
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
@import './views/zhongguose/transition.scss';
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
