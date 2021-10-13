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
    },
  },
}
</script>

<style lang="scss" scoped>
.demo {
  font-weight: $font-weight-base;
  font-size: $font-size-base;
  font-family: $font-family-sans-serif;
  line-height: $line-height-base;
}

.font-demo {
  font-size: $h1-font-size;
}

.switcher {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.472rem;
  height: 2.472rem;
  color: var(--primary-color);
  background-color: var(--module-bg);
  border-left: 0.309rem solid var(--primary-color);
  border-top-left-radius: 2px;
  cursor: pointer;
  opacity: 0.4;
  transition: opacity 0.1s, visibility 0.1s;

  &:hover {
    opacity: 1;
  }
}
</style>
