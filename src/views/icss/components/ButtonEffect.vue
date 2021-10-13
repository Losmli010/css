<template>
  <h3>4、各种按钮效果</h3>
  <div class="button-effect">
    <button class="btn btn-line-move">Hover Me</button>
    <button class="btn btn-double-line-move">Hover Me</button>
    <button class="btn btn-color-move">Hover Me</button>
  </div>
</template>

<style lang="scss" scoped>
.button-effect {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  .btn {
    display: inline-block;
    min-width: 160px;
    min-height: 60px;
    color: #525288;
    font-weight: 600;
    font-size: 20px;
    background-color: #f7f4ed;
    cursor: pointer;
  }

  .btn-line-move {
    position: relative;
    background-color: #fff;
    border: 0;

    &::after {
      position: absolute;
      right: 0;
      bottom: 0;
      width: 0;
      height: 1px;
      background-color: #525288;
      transition: 0.25s width;
      content: '';
    }

    &:hover::after {
      left: 0;
      width: 100%;
    }
  }

  .btn-double-line-move {
    position: relative;
    background-color: #fff;
    border: 0;

    &::before {
      position: absolute;
      top: 0;
      left: 0;
      width: 160px;
      height: 1px;
      background-color: #525288;
      transform: scale3d(0, 1, 1);
      transform-origin: 0 0;
      transition: 0.25s transform;
      content: '';
    }

    &:hover::before {
      transform: scale3d(1, 1, 1);
      transform-origin: 100% 100%;
    }

    &::after {
      position: absolute;
      right: 0;
      bottom: 0;
      width: 0;
      height: 1px;
      background-color: #525288;
      transition: 0.25s width;
      content: '';
    }

    &:hover::after {
      left: 0;
      width: 100%;
    }
  }

  .btn-color-move {
    position: relative;
    border: 1px solid #525288;

    &::after {
      position: absolute;
      right: 0;
      bottom: 0;
      z-index: -1;
      width: 0;
      height: 100%;
      background-color: #525288;
      transition: 0.25s width;
      content: '';
    }

    &:hover {
      z-index: 1;
      color: #f7f4ed;

      &::after {
        left: 0;
        width: 100%;
      }
    }
  }
}
</style>
