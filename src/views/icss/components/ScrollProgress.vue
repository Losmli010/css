<template>
  <div class="progress-demo">
    <h3>6、滚动进度条</h3>
  </div>
</template>

<style lang="scss">
body {
  background-image: linear-gradient(to right top, #2e317c 50%, #fff 50%);
  background-repeat: no-repeat;
  background-size: 100% calc(100% - 100vh + 4px);
}
body::after {
  position: fixed;
  top: 4px;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  background: #fff;
  content: '';
}
</style>
