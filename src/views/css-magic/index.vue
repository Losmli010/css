<template>
  <div>
    <ball />
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import Ball from './components/Ball.vue'

export default defineComponent({
  components: {
    Ball,
  },
})
</script>
