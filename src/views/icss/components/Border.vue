<template>
  <h3>1、左边框</h3>
  <div class="border-demo">
    <div class="border">border实现</div>

    <div class="before">伪类实现</div>

    <div class="box-shadow-out">外 box-shadow 实现</div>

    <div class="box-shadow-in">内 box-shadow 实现</div>

    <div class="drop-shadow">drop-shadow 实现</div>

    <div class="linear-gradient">渐变 linearGradient 实现</div>
  </div>
</template>

<style lang="scss" scoped>
.border-demo {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  .border {
    width: 200px;
    height: 60px;
    color: #ea8958; // 晨曦红
    line-height: 60px;
    text-align: center;
    background: #f7f4ed; // 鱼肚白
    border-left: 5px solid #8fb2c9; // 晴山蓝
  }

  .before {
    position: relative;
    width: 200px;
    height: 60px;
    color: #000;
    line-height: 60px;
    text-align: center;
    background: #f9e9cd; // 米色

    &::after {
      position: absolute;
      top: 0;
      left: 0;
      width: 5px;
      height: 60px;
      background: #e0c8d1; // 淡青紫
      content: '';
    }
  }

  .box-shadow-out {
    width: 200px;
    height: 60px;
    color: #000;
    line-height: 60px;
    text-align: center;
    background: #e2d849; // 蝶黄
    box-shadow: -5px 0 0 0 #4e7ca1;
  }

  .box-shadow-in {
    width: 200px;
    height: 60px;
    color: #000;
    line-height: 60px;
    text-align: center;
    background: #fecc11; // 向日葵黄
    box-shadow: 5px 0 0 0 #207f4c inset; // 薄荷绿
  }

  .drop-shadow {
    width: 200px;
    height: 60px;
    color: #e16c96;
    line-height: 60px;
    text-align: center;
    background: #fbecde;
    filter: drop-shadow(-5px 0 0 #1a6840); // 荷叶绿
  }

  .linear-gradient {
    width: 200px;
    height: 60px;
    color: #ee2746; // 淡曙红
    line-height: 60px;
    text-align: center;
    background: #fbecde;
    background-image: linear-gradient(
      90deg,
      #1a6840 0,
      #1a6840 5px,
      transparent 5px
    ); // 荷叶绿
  }
}
</style>
