<template>
  <div>
    <ball />
    <flip />
    <slider />
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import Ball from './components/Ball.vue'
import Flip from './components/Flip.vue'
import Slider from './components/Slider.vue'

export default defineComponent({
  components: {
    Ball,
    Flip,
    Slider,
  },
})
</script>
