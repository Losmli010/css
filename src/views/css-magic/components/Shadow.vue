<template>
  <div class="box">
    <div class="shadow-one-side"></div>
    <div class="shadow-two-side"></div>
    <div class="shadow-filter"></div>
    <div class="shadow">
      <div class="shadow1"></div>
      <div class="shadow2"></div>
      <div class="shadow3"></div>
    </div>

    <div class="image-slider">
      <div>
        <img src="./qixi.jpeg" alt="" />
      </div>
      <img src="./qixi.jpeg" alt="" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
/* stylelint-disable no-descending-specificity */
.shadow-one-side {
  width: 1.6in;
  height: 1in;
  background: #fb3;
  box-shadow: 0 5px 4px -2px black;
}

.shadow-two-side {
  width: 1.6in;
  height: 1in;
  margin-top: 100px;
  background: #fb3;
  box-shadow: -5px 0 5px -3px black, 5px 0 5px -3px black;
}

.shadow-filter {
  width: 1.6in;
  height: 1in;
  margin-top: 100px;
  background: #fb3;
  filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.5))
    drop-shadow(-5px -5px 5px rgba(0, 0, 0, 0.5));
}

.shadow {
  display: flex;
  justify-content: space-between;

  div {
    width: 1.6in;
    height: 1in;
    margin-top: 100px;
    background: #fb3;
  }

  .shadow1 {
    box-shadow: 0 1px 2px -2px rgba(0, 0, 0, 0.16),
      0 3px 6px 0 rgba(0, 0, 0, 0.12), 0 5px 12px 4px rgba(0, 0, 0, 0.09);
  }
  .shadow2 {
    box-shadow: 0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05);
  }
  .shadow3 {
    box-shadow: 0 6px 16px -8px rgba(0, 0, 0, 0.08),
      0 9px 28px 0 rgba(0, 0, 0, 0.05), 0 12px 48px 16px rgba(0, 0, 0, 0.03);
  }
}

.image-slider {
  position: relative;
  display: inline-block;
  width: 200px;
  height: 200px;
  margin-top: 100px;

  & > div {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 50%;
    max-width: 100%;
    overflow: hidden;
    resize: horizontal;

    img {
      width: 200px;
      height: 200px;
      object-fit: cover;
      filter: sepia(200%) saturate(800%) opacity(20%);
    }
  }

  img {
    display: block;
    width: inherit;
    height: inherit;
    object-fit: cover;
  }
}
</style>
