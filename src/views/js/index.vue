<template>
  <div>
    <bit-operator />
    <function />
    <objects />
    <event-loop />
    <promise />
  </div>
</template>

<script>
import BitOperator from './components/BitOperator.vue'
import Function from './components/Function.vue'
import Objects from './components/Object.vue'
import EventLoop from './components/EventLoop.vue'
import Promise from './components/Promise.vue'

export default {
  components: {
    BitOperator,
    Function,
    Objects,
    EventLoop,
    Promise,
  },
}
</script>
