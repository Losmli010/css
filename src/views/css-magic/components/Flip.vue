<template>
  <div class="box">
    <div class="front">
      <img src="./qixi.jpeg" />
    </div>
    <div class="back">
      <span>i love you</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.box {
  width: 200px;
  height: 200px;
  position: relative;
  perspective: 500;

  img {
    width: 200px;
    height: 200px;
    object-fit: cover;
  }
}
.box div {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  transition: all 2s;
}
.box .back {
  display: flex;
  align-items: center;
  justify-content: center;
  background: pink;
  transform: rotateY(-180deg);
}
.box:hover .front {
  transform: rotateY(-180deg);
}
.box:hover .back {
  transform: rotateY(-360deg);
}
</style>
