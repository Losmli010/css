<template>
  <div>
    <ball />
    <flip />
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import Ball from './components/Ball.vue'
import Flip from './components/Flip.vue'

export default defineComponent({
  components: {
    Ball,
    Flip,
  },
})
</script>
