<template>
  <div>
    <background />
    <shape />
    <Shadow />
    <ball />
    <flip />
    <slider />
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import Background from './components/Background.vue'
import Shape from './components/Shape.vue'
import Shadow from './components/Shadow.vue'
import Ball from './components/Ball.vue'
import Flip from './components/Flip.vue'
import Slider from './components/Slider.vue'

export default defineComponent({
  components: {
    Background,
    Shape,
    Shadow,
    Ball,
    Flip,
    Slider,
  },
})
</script>
