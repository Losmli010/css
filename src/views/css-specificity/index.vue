<template>
  <div>
    <latest-rule />
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import LatestRule from './components/LatestRule.vue'

export default defineComponent({
  components: {
    LatestRule,
  },
})
</script>
