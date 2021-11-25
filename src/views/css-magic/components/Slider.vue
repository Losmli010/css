<template>
  <div ref="circleNode" class="path">
    <div
      v-for="index in 16"
      :key="index"
      class="avatar"
      @mouseenter="stop"
      @mouseleave="go"
    >
      <span class="item">{{ index }}</span>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue'

export default defineComponent({
  setup() {
    const circleNode = ref(null)
    const state = ref(false)

    onMounted(() => {
      run()
    })

    const running = (node) => {
      return new Promise((resolve) => {
        if (state.value) return
        node.style.animationPlayState = 'running'
        setTimeout(() => {
          resolve(paused(node))
        }, 625)
      })
    }

    const paused = (node) => {
      return new Promise((resolve) => {
        if (state.value) return
        node.style.animationPlayState = 'paused'
        setTimeout(() => {
          resolve(running(node))
        }, 5000)
      })
    }

    const run = () => {
      Array.from(circleNode.value.children).forEach((item) => {
        running(item)
      })
    }

    const stop = () => {
      state.value = true
    }

    const go = () => {
      state.value = false
      Array.from(circleNode.value.children).forEach((item) => {
        running(item)
      })
    }

    return { circleNode, stop, go }
  },
})
</script>

<style lang="scss" scoped>
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
  animation: spin 10s infinite linear;
  animation-play-state: paused;
  transform-origin: 50% 150px;
}

.avatar > span {
  animation: inherit;
  animation-direction: reverse;
}

/* Anything below this is just styling */

.avatar {
  width: 50px;
  margin: 0 auto;
  border-radius: 50%;
  overflow: hidden;
}

.avatar > span {
  display: block;
  width: 30px;
  height: 30px;
  background: red;
}

.path {
  position: relative;
  width: 300px;
  height: 300px;
  padding: 20px;
  margin: 100px 0;
  border-radius: 50%;
  background: #fb3;
}
@for $i from 1 through 16 {
  .avatar:nth-child(#{$i}) {
    animation-delay: #{$i * 0.625 - 10}s;
  }
}
</style>
