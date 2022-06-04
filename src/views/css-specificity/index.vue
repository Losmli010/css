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
  setup() {
    function hex2int(hex) {
      const length = hex.length
      if (length < 3 || hex[0] !== '0' || hex[1] !== 'x') {
        new Error('Invaild input')
      }

      let result = 0
      const map = {
        0: 0,
        1: 1,
        2: 2,
        3: 3,
        4: 4,
        5: 5,
        6: 6,
        7: 7,
        8: 8,
        9: 9,
        A: 10,
        B: 11,
        C: 12,
        D: 13,
        E: 14,
        F: 15,
        a: 10,
        b: 11,
        c: 12,
        d: 13,
        e: 14,
        f: 15,
      }
      for (let i = 2; i < length; i++) {
        //     try {
        let current = map[hex[i]]
        console.log(current)
        //     } catch {
        //         new Error('Invaild input')
        //     }
        result += current * 16 ** (length - i - 1)
      }
      return result
    }

    console.log(hex2int('0xfff'))
  },
})
</script>
