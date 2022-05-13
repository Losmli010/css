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
        <img src="http://lea.verou.me/book/adamcatlace.jpg" />
      </div>
      <div class="avatar">
        <img src="http://lea.verou.me/book/adamcatlace.jpg" />
      </div>
      <div class="avatar">
        <img src="http://lea.verou.me/book/adamcatlace.jpg" />
      </div>
      <div class="avatar">
        <img src="http://lea.verou.me/book/adamcatlace.jpg" />
      </div>
      <div class="avatar">
        <img src="http://lea.verou.me/book/adamcatlace.jpg" />
      </div>
      <div class="avatar">
        <img src="http://lea.verou.me/book/adamcatlace.jpg" />
      </div>
      <div class="avatar">
        <img src="http://lea.verou.me/book/adamcatlace.jpg" />
      </div>
      <div class="avatar">
        <img src="http://lea.verou.me/book/adamcatlace.jpg" />
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({})
</script>

<style lang="scss" scoped>
/* stylelint-disable no-duplicate-selectors */
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
    animation: bounce 3s cubic-bezier(0.1, 0.25, 1, 0.25) forwards;
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

/**
 * Animation along a circular path - Solution 1
 */

@keyframes spin {
  to {
    transform: rotate(1turn);
  }
}

.avatar {
  position: absolute;
  left: 125px;
  transform-origin: 50% 150px;
  animation: spin 10s infinite linear;
}

.avatar > img {
  animation: inherit;
  animation-direction: reverse;
}

/* Anything below this is just styling */

.avatar {
  width: 50px;
  margin: 0 auto;
  overflow: hidden;
  border-radius: 50%;
}

.avatar > img {
  display: block;
  width: inherit;
}

.path {
  position: relative;
  width: 300px;
  height: 300px;
  margin: 100px 0;
  padding: 20px;
  background: #fb3;
  border-radius: 50%;
}
.avatar:first-child {
  animation-delay: -10s;
}
.avatar:nth-child(2) {
  animation-delay: -8.75s;
}
.avatar:nth-child(3) {
  animation-delay: -7.5s;
}
.avatar:nth-child(4) {
  animation-delay: -6.25s;
}
.avatar:nth-child(5) {
  animation-delay: -5s;
}
.avatar:nth-child(6) {
  animation-delay: -3.75s;
}
.avatar:nth-child(7) {
  animation-delay: -2.5s;
}
.avatar:nth-child(8) {
  animation-delay: -1.25s;
}
</style>
