<template>
  <div class="box">
    <div class="transparent-border"></div>
    <div class="stripes" />
  </div>
</template>

<style lang="scss" scoped>
.box {
  background: url('./qixi.jpeg') no-repeat;
  background-size: 9%;
}
.transparent-border {
  width: 83px;
  padding: 20px;
  background: white;
  background-clip: padding-box;
  border: 10px solid hsla(0, 0%, 100%, 0.5);
}

.stripes {
  width: 200px;
  height: 200px;
  background: #58a;
  background-image: repeating-linear-gradient(
    30deg,
    hsla(0, 0%, 100%, 0.1),
    hsla(0, 0%, 100%, 0.1) 15px,
    transparent 0,
    transparent 30px
  );
}
</style>
