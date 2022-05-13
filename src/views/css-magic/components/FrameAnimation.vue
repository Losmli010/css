<template>
  <div class="loader">Loading...</div>
</template>

<style scoped>
.loader {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100px;
  height: 100px;
  overflow: hidden;
  text-indent: 999px;
  background: url(loader.png) 0 0;
  transform: translate(-50%, -50%);
  animation: loader 1s infinite steps(8);
}

@keyframes loader {
  to {
    background-position: -800px 0;
  }
}
</style>
