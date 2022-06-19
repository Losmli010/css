<template>
  <div>
    <bit-operator />
    <function />
    <objects />
    <event-loop />
    <promise />
    <generator />
  </div>
</template>

<script>
import BitOperator from './components/BitOperator.vue'
import Function from './components/Function.vue'
import Objects from './components/Object.vue'
import EventLoop from './components/EventLoop.vue'
import Promise from './components/Promise.vue'
import Generator from './components/Generator.vue'

export default {
  components: {
    BitOperator,
    Function,
    Objects,
    EventLoop,
    Promise,
    Generator,
  },
}
</script>
