<template>
  <h3>3、背景色渐变动画</h3>
  <div class="lg">
    <div class="demo1"></div>
    <div class="demo2"></div>
    <div class="taichi"></div>
  </div>
</template>

<style lang="scss" scoped>
.demo1 {
  width: 300px;
  height: 100px;
  background: linear-gradient(90deg, #ea8958 0%, #fecc11 50%, #c21f30 100%);
  background-position: 0 0;
  background-size: 200% 100%;
  animation: bgposition 2s infinite linear alternate;
}
@keyframes bgposition {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 100% 0;
  }
}

.demo2 {
  width: 300px;
  height: 100px;
  background: linear-gradient(
    90deg,
    #43b244 0%,
    #1677b3 33%,
    #1661ab 66%,
    #2e317c 100%
  );
  background-position: 100% 0;
  animation: bgSize 5s infinite ease-in-out alternate;
}
@keyframes bgSize {
  0% {
    background-size: 300% 100%;
  }
  100% {
    background-size: 100% 100%;
  }
}

.taichi {
  width: 200px;
  height: 200px;
  // margin: auto;
  background-image: radial-gradient(#000 12.5px, transparent 12.5px),
    radial-gradient(#fff 12.5px, transparent 12.5px),
    radial-gradient(#fff 50px, transparent 50px),
    radial-gradient(#000 50px, transparent 50px),
    linear-gradient(90deg, #000 100px, #fff 100px);
  background-position: center 50px, center -50px, center 50px, center -50px, 0 0;
  border-radius: 50%;
  box-shadow: 0 0 5px #ddd;
  animation: rotate 10s infinite linear;
}
@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}
</style>
