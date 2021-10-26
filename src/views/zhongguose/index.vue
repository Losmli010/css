<template>
  <div class="demo">
    <button class="btn" @click="show = !show">过渡效果</button>

    <transition-group v-if="show" name="fade" tag="div">
      <button
        v-for="color in colors"
        :key="color.name"
        :style="{ background: color.hex }"
        class="btn"
      >
        {{ color.name }}
      </button>
    </transition-group>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { zhongguose } from './zhongguose'

export default defineComponent({
  setup() {
    const show = ref(true)
    const colors = ref(zhongguose)

    return { show, colors }
  },
})
</script>

<style lang="scss" scoped>
@import './transition.scss';

.btn {
  display: inline-block;
  min-width: 80px;
  margin: 0 1em 1em 0;
  font-size: 14px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
