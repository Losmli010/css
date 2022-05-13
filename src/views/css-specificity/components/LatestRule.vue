<template>
  <div class="box">
    <h1>Equal specificity: the latest rule is the one that counts.</h1>
    <p>
      <a
        href="https://www.smashingmagazine.com/2007/07/css-specificity-things-you-should-know/"
        target="_blank"
        rel="noopener noreferrer"
      >
        参考链接
      </a>
    </p>
  </div>
</template>

<style lang="scss" scoped>
/* stylelint-disable no-duplicate-selectors */
.box h1 {
  font-size: 10px;
}
.box h1 {
  font-size: 20px;
}
</style>
