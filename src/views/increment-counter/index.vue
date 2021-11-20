<template>
  <div>
    <div class="counter-container">
      <div class="counter" data-target="12000"></div>
      <span>Twitter Followers</span>
    </div>

    <div class="counter-container">
      <div class="counter" data-target="5000"></div>
      <span>YouTube Subscribers</span>
    </div>

    <div class="counter-container">
      <div class="counter" data-target="7500"></div>
      <span>Facebook Fans</span>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    const counters = document.querySelectorAll('.counter')

    counters.forEach((counter) => {
      counter.innerText = '0'

      const updateCounter = () => {
        const target = +counter.getAttribute('data-target')
        const c = +counter.innerText

        const increment = target / 200

        if (c < target) {
          counter.innerText = `${Math.ceil(c + increment)}`
          setTimeout(updateCounter, 1)
        } else {
          counter.innerText = target
        }
      }

      updateCounter()
    })
  },
}
</script>

<style lang="scss" scoped>
.counter-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 30px 50px;
  text-align: center;
}

.counter {
  margin-top: 10px;
  font-size: 60px;
}
</style>
