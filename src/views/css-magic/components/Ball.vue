<template>
  <div>
    <div class="ball-wrapper">
      <span class="ball" />
    </div>

    <div class="divider" />

    <div class="panoramic"></div>

    <div class="divider" />

    <div class="path">
      <div class="avatar">
        <img src="./qixi.jpeg" alt="" />
      </div>
      <div class="avatar">
        <img src="./qixi.jpeg" alt="" />
      </div>
      <div class="avatar">
        <img src="./qixi.jpeg" alt="" />
      </div>
      <div class="avatar">
        <img src="./qixi.jpeg" alt="" />
      </div>
      <div class="avatar">
        <img src="./qixi.jpeg" alt="" />
      </div>
      <div class="avatar">
        <img src="./qixi.jpeg" alt="" />
      </div>
      <div class="avatar">
        <img src="./qixi.jpeg" alt="" />
      </div>
      <div class="avatar">
        <img src="./qixi.jpeg" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({})
</script>

<style lang="scss" scoped>
.divider {
  height: 20px;
}

.ball-wrapper {
  height: 500px;

  .ball {
    display: block;
    width: 50px;
    height: 50px;
    background: radial-gradient(closest-side at 35% 35%, transparent, #e52069);
    border-radius: 50%;
    animation: bounce 3s cubic-bezier(0.1, 0.25, 1, 1.25) infinite;
  }
}
@keyframes bounce {
  60%,
  80%,
  to {
    transform: translateY(400px);
    animation-timing-function: ease;
  }
  70% {
    transform: translateY(300px);
  }
  90% {
    transform: translateY(360px);
  }
}

.panoramic {
  width: 200px;
  height: 200px;
  background: url('./qixi.jpeg');
  background-size: 100% auto;
  animation: panoramic 10s linear infinite alternate-reverse;
  animation-play-state: paused;
}
.panoramic:hover {
  animation-play-state: running;
}
@keyframes panoramic {
  to {
    background-position: 0 100%;
  }
}

.path {
  position: relative;
  margin: 100px;
  width: 300px;
  height: 300px;
  background: orange;
  border-radius: 50%;
}
.avatar {
  position: absolute;
  margin-left: 100px;
  transform-origin: 100% 200px;
  animation: spin 8s infinite linear;

  & > img {
    display: inline-block;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    object-fit: cover;
    animation: spin-reverse 8s infinite linear;
  }
}
.avatar:first-child {
  top: 190px;
  left: 40px;
  animation-delay: -8s;
}
.avatar:nth-child(2) {
  top: 230px;
  left: 80px;
  animation-delay: -7s;
}
.avatar:nth-child(3) {
  top: 230px;
  left: 190px;
  animation-delay: -6s;
}
.avatar:nth-child(4) {
  top: 190px;
  left: 230px;
  animation-delay: -5s;
}
.avatar:nth-child(5) {
  top: 80px;
  left: 230px;
  animation-delay: -4s;
}
.avatar:nth-child(6) {
  top: 40px;
  left: 190px;
  animation-delay: -3s;
}
.avatar:nth-child(7) {
  top: 40px;
  left: 80px;
  animation-delay: -2s;
}
.avatar:nth-child(8) {
  top: 80px;
  left: 40px;
  animation-delay: -1s;
}
@keyframes spin {
  to {
    transform: rotate(1turn);
  }
}
@keyframes spin-reverse {
  from {
    transform: rotate(1turn);
  }
}
</style>
