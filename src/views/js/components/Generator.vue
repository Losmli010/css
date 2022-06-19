<template>
  <div>
    <h3>Generator</h3>
    <ul>
      <li>按位非（NOT）：操作数的负值减1</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
function* helloWorldGenerator() {
  yield 'hello'
  yield 'world'
  return 'end'
}

const hwg = helloWorldGenerator()
console.log(hwg.next())
console.log(hwg.next())
console.log(hwg.next())
console.log(hwg.next())

function* f() {
  for (let i = 0; true; i++) {
    let reset = yield i
    console.log(reset)
    if (reset) i = -1
  }
}

const g = f()
console.log(g.next())
console.log(g.next())
console.log(g.next())
console.log(g.next(true))

function* foo(x: number) {
  let y = 2 * (yield x + 1)
  console.log(y)
  let z = yield y / 3
  console.log(z)
  return x + y + z
}

const a = foo(5)
console.log(a.next())
console.log(a.next())
console.log(a.next())

const b = foo(5)
console.log(b.next())
console.log(b.next(12))
console.log(b.next(13))
</script>
