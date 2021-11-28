<template>
  <div class="box">
    <div class="ellipse"></div>

    <div class="parallelogram">
      <span>平行四边形</span>
    </div>

    <div class="diamond">
      <img src="./qixi.jpeg" alt="" />
    </div>

    <div class="diamond1">
      <img src="./qixi.jpeg" alt="" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.ellipse {
  width: 100px;
  height: 50px;
  border-radius: 50% / 50%;
  background: #fb3;
}

.parallelogram {
  width: 200px;
  padding: 0.5em 1em;
  margin: 0.5em;
  background: #58a;
  color: white;
  transform: skewX(45deg);
  text-align: center;

  & > span {
    display: inline-block;
    transform: skewX(-45deg);
  }
}

.diamond {
  width: 200px;
  height: 200px;
  margin: 100px;
  transform: rotate(45deg);
  overflow: hidden;

  & > img {
    max-width: 100%;
    transform: rotate(-45deg) scale(1.92);
  }
}

.diamond1 img {
  max-width: 250px;
  margin: 20px;
  -webkit-clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);
  clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);
  transition: 1s;
}
</style>
