<template>
  <div ref="el">
    <slot></slot>
  </div>
</template>

<script>
import { defineComponent, ref, onMounted, onUnmounted } from 'vue'

export default defineComponent({
  name: 'QueueAnim',
  props: {
    direction: {
      type: String,
      default: 'right',
    },
    interval: {
      type: Number,
      default: 100,
    },
    duration: {
      type: Number,
      default: 0.25,
    },
    delay: {
      type: Number,
      default: 0,
    },
  },
  setup(props) {
    const el = ref(null)

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

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          console.log(entry.target)
          console.log(entry)

          if (entry.isIntersecting) {
            Array.from(entry.target.children).forEach((item, index) => {
              let delay = index * props.interval
              setTimeout(() => {
                item.style.opacity = 1
                item.style.transform = 'translate(0, 0)'
                item.style.transition = `transform ${props.duration}s ease`
              }, delay)
            })

            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.5 }
    )

    onMounted(() => {
      observer.observe(el.value)

      Array.from(el.value.children).forEach((item) => {
        item.style.opacity = 0
        item.style.transform = initTransform(props.direction)
      })
    })

    onUnmounted(() => {
      observer.disconnect()
    })

    return { el }
  },
})
</script>
