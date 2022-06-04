<template>
  <div>
    <h3>Function属性和方法</h3>
    <ul>
      <li>apply</li>
      <li>call</li>
      <li>bind</li>
    </ul>
  </div>
</template>

<script setup>
console.log('function call apply bind')
// 使用其它对象的方法实现自身功能
function sum(n1, n2) {
  return n1 + n2
}

function callSum1() {
  return sum.apply(this, arguments)
}

function callSum2(n1, n2) {
  return sum.apply(this, [n1, n2])
}
console.log(callSum1(1, 2), callSum2(1, 2))

window.color = 'red'
const o = { color: 'blue' }
function callColor() {
  console.log(this.color)
}
callColor.call(window)
callColor.call(o)

// bind创建函数实例
const bindFunc = callColor.bind(o)
bindFunc()

// function bind(fn, context) {
//   return function () {
//     return fn.apply(context, arguments)
//   }
// }

// 函数柯理化
function curry(fn) {
  const args = Array.prototype.slice.call(arguments, 1)
  return function () {
    const innerArgs = Array.prototype.slice.call(arguments)
    const finalArgs = args.concat(innerArgs)
    return fn.apply(null, finalArgs)
  }
}

function add(n1, n2) {
  return n1 + n2
}

const curryAdd = curry(add, 1)
console.log(curryAdd(1, 20, 3))
</script>
