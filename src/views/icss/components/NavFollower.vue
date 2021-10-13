<template>
  <h3>5、下划线跟随</h3>
  <div class="nav-follower">
    <ul>
      <li>不可思议的CSS</li>
      <li>导航栏</li>
      <li>光标小下划线跟随</li>
      <li>PURE CSS</li>
      <li>Nav Underline</li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
ul {
  display: flex;
  list-style: none;
}

li {
  position: relative;
  padding: 20px;
  color: #000;
  font-size: 24px;
  line-height: 1;
  cursor: pointer;
  transition: 0.2s all linear;
}

li::before {
  position: absolute;
  top: 0;
  left: 100%;
  width: 0;
  height: 100%;
  border-bottom: 2px solid #525288;
  transition: 0.2s all linear;
  content: '';
}

li:hover {
  color: #525288;
}

li:hover::before {
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  border-bottom-color: #525288;
  transition-delay: 0.1s;
}

li:hover ~ li::before {
  left: 0;
}
</style>
