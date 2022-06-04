<template>
  <div>
    <h3>Object</h3>
    <ul>
      <li>数据属性</li>
      <li>属性访问器</li>
      <li>原型模式 prototype</li>
      <li>继承和原型链</li>
    </ul>
  </div>
</template>

<script setup>
console.log('Object')
// 数据属性
const person = {}
Object.defineProperty(person, 'name', {
  writable: false, // 只读，不可修改
  configurable: false, // 不可删除,delete无法生效
  enumerable: false, // 不可for...in
  value: 'Losmli',
})
console.log(person.name)

// 属性访问器
const book = {
  _year: 2000,
}
Object.defineProperty(book, 'year', {
  get: function () {
    return this._year
  },
  set: function (value) {
    if (isNaN(value) || value < 0) {
      this._year = 2000
    } else {
      this._year = value
    }
  },
})
console.log(book.year)
book.year = 'test'
console.log(book.year)
book.year = -2018
console.log(book.year)
book.year = 2019
console.log(book.year)

// 创建对象
// 1.工厂模式
// 2.构造函数模式
// 3.原型模式

// eslint-disable-next-line @typescript-eslint/no-empty-function
function Student() {}
Student.prototype.name = 'Losmli'
Student.prototype.age = 18
Student.prototype.toString = function () {
  return this.name
}

// 共享
const student1 = new Student()
const student2 = new Student()
console.log(student1.toString() == student2.toString())
// 原型链指向
console.log(Student.prototype.constructor === Student)
console.log(student1.__proto__ === Student.prototype)
// 对象的属性搜索过程：先搜索对象自身，如果没有，搜索原型上是否存在该属性
student1.name = 'test'
console.log(`来自实例：${student1.name}`)
console.log(`来自原型：${student2.name}`)
// 使用 hasOwnProperty 可以检测属性是存在实例中，还是存在原型中
// eslint-disable-next-line no-prototype-builtins
console.log(`来自实例：${student1.hasOwnProperty('name')}`)
// eslint-disable-next-line no-prototype-builtins
console.log(`来自原型：${student2.hasOwnProperty('name')}`)
// 判断属性只存在原型中
function hasPrototypeProperty(obj, name) {
  // eslint-disable-next-line no-prototype-builtins
  return !obj.hasOwnProperty(name) && name in obj
}
console.log(`存在于原型中：${hasPrototypeProperty(student1, 'name')}`)
// eslint-disable-next-line no-prototype-builtins
console.log(`存在于原型中：${hasPrototypeProperty(student2, 'name')}`)

// 合并 prototype 定义
// eslint-disable-next-line @typescript-eslint/no-empty-function
function Person() {}
Person.prototype = {
  name: 'Losmli',
  age: 18,
  toString: function () {
    return this.name
  },
}
Object.defineProperty(Person.prototype, 'constructor', {
  enumerable: false,
  value: Person,
})

const person1 = new Person()
console.log(person1.name)
// 原型模式存在的问题：所有对象共用原型上定义的属性，对象的属性彼此容易相互影响

// 构造函数模式和原型模式创建自定义类型
// 数据属性不共享
function Tree(name, age) {
  this.name = name
  this.age = age
  this.colors = ['green', 'red']
}

// 共享函数
Tree.prototype = {
  constructor: Tree,
  toString: function () {
    return this.name
  },
}

const tree1 = new Tree('Jack', 16)
const tree2 = new Tree('Tom', 18)
tree1.colors.push('yellow')
console.log(tree1.colors)
console.log(tree2.colors)
console.log(tree1.colors === tree2.colors)
console.log(tree1.toString === tree2.toString)

// 继承
// 组合式继承
function SuperType(name) {
  this.name = name
  this.colors = ['blue', 'red', 'yellow']
  console.log(Math.random())
}
SuperType.prototype.constructor = SuperType
SuperType.prototype.sayName = function () {
  return this.name
}

function SubType(name, age) {
  // 继承属性
  SuperType.call(this, name) // 原型被第二次调用
  this.age = age
}
// 继承函数
SubType.prototype = new SuperType() // 原型被第一次调用
SubType.prototype.constructor = SubType
SubType.prototype.sayAge = function () {
  return this.age
}

const sub = new SubType('sub', 18)
console.log(sub.name, sub.age, sub.colors)
console.log(sub.sayName(), sub.sayAge())

// 寄生组合式继承，避免原型被多次调用
function object(o) {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  function F() {}
  F.prototype = o
  return new F()
}
function inheritPrototype(subType, superType) {
  const prototype = object(superType.prototype)
  prototype.constructor = subType
  subType.prototype = prototype
}

function SuperTp(name) {
  this.name = name
  this.colors = ['blue', 'red', 'yellow']
  console.log(Math.random())
}
SuperTp.prototype.constructor = SuperTp
SuperTp.prototype.sayName = function () {
  return this.name
}

function SubTp(name, age) {
  // 继承属性
  SuperTp.call(this, name)
  this.age = age
}
// 只继承函数
inheritPrototype(SubTp, SuperTp)
SubTp.prototype.sayAge = function () {
  return this.age
}

const sb = new SubTp('sb', 18)
console.log(sb.name, sb.age, sb.colors)
console.log(sb.sayName(), sb.sayAge())
</script>
