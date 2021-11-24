<template>
  <div class="wrapper">
    <div class="item">1111</div>
    <div class="item">222</div>
    <div class="item">333</div>
    <div class="item">444</div>
  </div>
</template>

<script>
import { defineComponent, onMounted } from 'vue'

export default defineComponent({
  setup() {
    onMounted(() => {
      const nodeList = document.getElementsByClassName('item')
      Array.from(nodeList).forEach((item, index) => {
        setTimeout(() => {
          item.style.transition = 'transform 0s linear'
          let offset = 70 - (index + 1) * 10 + 'px'
          item.style.transform = `translate(-88px, ${offset})`
          console.log(item.clientWidth)
        }, 200)
      })
    })
  },
})
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  //flex-direction: column;

  .item {
    //flex: 0 0 25%;
    width: 288px;
    height: 288px;
    background: yellow;
    margin-right: 16px;
  }

  .item:first-child {
    transform: translateY(50px);
  }

  .item:nth-child(2) {
    transform: translateY(70px);
  }
  .item:nth-child(3) {
    transform: translateY(60px);
  }
  .item:nth-child(4) {
    transform: translateY(40px);
  }
}
</style>
