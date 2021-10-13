<template>
  <div>
    <h1>sentry监控</h1>
    <ul>
      <li><button class="btn btn-red" @click="throwErr">throw</button></li>
      <li>
        <button class="btn btn-orange" @click="promiseErr">reject</button>
      </li>
      <li><button class="btn btn-yellow" @click="catchErr">catch</button></li>
      <li><button class="btn btn-green" @click="asyncErr">async</button></li>
    </ul>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const throwErr = () => {
      throw new Error('主动触发异常')
    }

    const promiseErr = () => {
      Promise.reject(new Error('promise reject'))
    }

    const catchErr = () => {
      try {
        throw new Error('try catch 处理异常')
      } catch (err) {
        console.log(err)
      }
    }

    const asyncErr = async () => {
      await fetch('https://www.google.com', { credentials: 'include' })
    }

    return {
      throwErr,
      promiseErr,
      catchErr,
      asyncErr,
    }
  },
})
</script>

<style lang="scss" scoped>
.btn {
  display: inline-block;
  min-width: 80px;
  margin: 0 1em 1em 0;
  font-size: 14px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.btn-red {
  background: #c21f30;
}
.btn-orange {
  background: #ea8958;
}
.btn-yellow {
  background: #fecc11;
}
.btn-green {
  background: #43b244;
}
</style>
