<template>
  <div ref="el" class="text">
    <span v-for="(word, i) in wordList" :key="word + '-' + i">
      {{ word }}
    </span>
  </div>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue'

export default defineComponent({
  name: 'TextAnim',
  props: {
    text: {
      type: String,
      required: true,
    },
    direction: {
      type: String,
      default: 'bottom',
    },
    interval: {
      type: Number,
      default: 50,
    },
    duration: {
      type: Number,
      default: 0.25,
    },
  },
  setup(props) {
    const el = ref(null)

    const wordList = props.text.split('')

    const initTransform = (direction) => {
      let transform
      switch (direction) {
        case 'bottom':
          transform = 'translate(0, 30px)'
          break
        case 'right':
          transform = 'translate(30px, 0)'
          break
        case 'top':
          transform = 'translate(0, -30px)'
          break
        default:
          transform = 'translate(-30px, 0)'
      }

      return transform
    }

    onMounted(() => {
      Array.from(el.value.children).forEach((item, index) => {
        item.style.opacity = 0
        item.style.transform = initTransform(props.direction)

        let delay = index * props.interval
        setTimeout(() => {
          item.style.opacity = 1
          item.style.transform = 'translate(0, 0)'
          item.style.transition = `transform ${props.duration}s ease`
        }, delay)
      })
    })

    return {
      el,
      wordList,
    }
  },
})
</script>

<style lang="scss" scoped>
.text span {
  display: inline-block;
  white-space: pre-wrap;
}
</style>
