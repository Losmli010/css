<template>
  <div>
    <TextAnim :text="title" direction="right" class="title" />
    <TextAnim :text="desc" class="desc" />

    <QueueAnim>
      <p>111</p>
      <p>111</p>
      <p>111</p>
      <p>111</p>
      <p>111</p>
      <p>111</p>
      <p>111</p>
      <p>111</p>
      <p>111</p>
      <p>111</p>
      <p>111</p>
      <p>111</p>
      <p>111</p>
      <p>111</p>
      <p>111</p>
      <p>111</p>
      <p>111</p>
      <p>111</p>
      <p>111</p>
      <p>111</p>
      <p>111</p>
      <p>111</p>
      <p>111</p>
    </QueueAnim>

    <QueueAnim direction="bottom" class="wrapper">
      <div>
        <div class="page1-item-img">
          <img
            src="https://gw.alipayobjects.com/zos/rmsportal/hMSnSxMzmiGSSIXxFtNf.svg"
            alt="img"
          />
        </div>
        <div class="page1-item-title">Sketch 资源包</div>
      </div>
      <div>
        <div class="page1-item-img">
          <img
            src="https://gw.alipayobjects.com/zos/rmsportal/QCcDSfdbCIbVSsUZJaQK.svg"
            alt="img"
          />
        </div>
        <div class="page1-item-title">设计指引</div>
      </div>
      <div>
        <div class="page1-item-img">
          <img
            src="https://gw.alipayobjects.com/zos/rmsportal/OMEOieDFPYDcWXMpqqzd.svg"
            alt="img"
          />
        </div>
        <div class="page1-item-title">响应式布局</div>
      </div>
    </QueueAnim>

    <QueueAnim>
      <p>111</p>
      <p>111</p>
      <p>111</p>
      <p>111</p>
      <p>111</p>
      <p>111</p>
      <p>111</p>
      <p>111</p>
    </QueueAnim>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import TextAnim from './components/TextAnim.vue'
import QueueAnim from './components/QueueAnim.vue'

export default defineComponent({
  components: {
    TextAnim,
    QueueAnim,
  },
  data() {
    return {
      title: '文字动画',
      desc: '一个针对文字标题的进行进出场动画的组件，提供非富的动画效果，也可以随自已的需求来配置完成不同的效果。',
    }
  },
})
</script>

<style lang="scss" scoped>
.title {
  padding-bottom: 20px;
  font-size: 30px;
}
.desc {
  width: 200px;
}

.wrapper {
  display: flex;

  div {
    flex: 0 0 33.33333%;
  }
}
</style>
