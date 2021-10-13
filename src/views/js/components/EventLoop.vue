<template>
  <div>
    <h3>Event Loop</h3>
    <p>
      <a
        href="https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/"
        target="_blank"
      >
        Tasks, microtasks, queues and schedules
      </a>
    </p>
    <ul>
      <li>tasks: settimeout异步回调队列。</li>
      <li>microtasks: promise异步回调队列。</li>
      <li>js stack: 主线程，同步任务栈。</li>
    </ul>
    <button class="btn" @click="emit">event loop</button>
  </div>
</template>

<script>
export default {
  methods: {
    emit() {
      console.log('script start')

      setTimeout(function () {
        console.log('setTimeout')
      }, 0)

      Promise.resolve()
        .then(function () {
          console.log('promise1')
        })
        .then(function () {
          console.log('promise2')
        })

      console.log('script end')
    },
  },
}
</script>
