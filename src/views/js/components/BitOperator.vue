<template>
  <div>
    <h3>位操作符</h3>
    <ul>
      <li>按位非（NOT）：操作数的负值减1</li>
      <li>按位与（AND）：对应位数值都为1才返回1</li>
      <li>按位或（OR）：对应位数值有1就返回1</li>
      <li>按位异或（XOR）：对应位数值是1和0才返回1</li>
      <li>左移</li>
      <li>有符号右移</li>
      <li>无符号右移</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
// 数值表示
const n1 = -10
const n2 = 0xa
console.log(n1.toString(2), n2.toString(2), isNaN(1.0))

// 按位非（NOT）
// 操作数的负值减1
console.log('按位非（NOT）')
console.log(~10, ~-10)

// 按位与（AND）
// 对应位数值都为1才返回1
console.log('按位与（AND）')
console.log(1 & 2, 1 & 3, 2 & 3, 2 & 4)
console.log(-1 & -2, -1 & -3, -2 & -3, -2 & -4)
console.log(1 & -2, 1 & -3, 2 & -3, 2 & -4)
console.log(1 & -1, 2 & -2, 3 & -3, 4 & -4)

// 按位或（OR）
// 对应位数值有1就返回1
console.log('按位或（OR）')
console.log(1 | 2, 1 | 3, 2 | 3, 2 | 4)
console.log(-1 | -2, -1 | -3, -2 | -3, -2 | -4)
console.log(1 | -2, 1 | -3, 2 | -3, 2 | -4)
console.log(1 | -1, 2 | -2, 3 | -3, 4 | -4)

// 按位异或（XOR）
// 对应位数值是1和0才返回1
console.log('按位异或（XOR）')
console.log(1 ^ 2, 1 ^ 3, 2 ^ 3, 2 ^ 4)
console.log(-1 ^ -2, -1 ^ -3, -2 ^ -3, -2 ^ -4)
console.log(1 ^ -2, 1 ^ -3, 2 ^ -3, 2 ^ -4)
console.log(1 ^ -1, 2 ^ -2, 3 ^ -3, 4 ^ -4)

// 左移
console.log('左移')
console.log(1 << 1, 1 << 2, 1 << 3, 1 << 4)
console.log(-1 << 1, -1 << 2, -1 << 3, -1 << 4)

// 有符号右移
console.log('有符号右移')
console.log(1 >> 1, 1 >> 2, 1 >> 3, 1 >> 4)
console.log(2 >> 1, 4 >> 2, 8 >> 3, 16 >> 4)

// 无符号右移
console.log('无符号右移')
console.log(2 >>> 1, 4 >>> 2, 8 >>> 3, 16 >>> 4)
console.log(-2 >>> 1, -4 >>> 2, -8 >>> 3, -16 >>> 4)
console.log(
  ('a'.charCodeAt(0) - 'a'.charCodeAt(0)) |
    ('b'.charCodeAt(0) - 'a'.charCodeAt(0)) |
    ('c'.charCodeAt(0) - 'a'.charCodeAt(0))
)
</script>
