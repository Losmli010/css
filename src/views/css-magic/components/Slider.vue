<template>
  <div class="container-wrapper">
    <div class="container">
      <div class="box-wrapper">
        <div ref="circleNode" class="box">
          <div
            v-for="index in 12"
            :key="index"
            class="wrapper"
            @mouseenter="stop"
            @mouseleave="go"
          >
            <div class="item">
              <img src="./qixi.jpeg" alt="" />
              <span>{{ index }}</span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <button @click="goForward">前进</button>
        <button @click="goBack">后退</button>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue'

export default defineComponent({
  setup() {
    const circleNode = ref(null)
    const state = ref(false)
    const step = ref(0)
    const timer = ref(null)

    onMounted(() => {
      run()
    })

    const run = () => {
      timer.value = setInterval(() => {
        if (state.value) return
        step.value += 1
        runStep()
      }, 3000)
    }

    const stop = () => {
      state.value = true
    }

    const go = () => {
      state.value = false
    }

    const goForward = () => {
      step.value += 1
      runStep()
    }

    const goBack = () => {
      step.value -= 1
      runStep()
    }

    const radius = 600
    const pi = Math.PI / 180
    const everyStep = 30
    const runStep = () => {
      circleNode.value.style.transition = 'transform 0.4s ease-in-out'
      circleNode.value.style.transform = `rotate(${step.value * everyStep}deg)`
      Array.from(circleNode.value.children).map((item, index) => {
        item.style.transition = 'transform 0.4s ease-in-out'
        switch (index) {
          case 0:
            item.style.transform = `translate(
    ${radius - radius * Math.cos(45 * pi)}px,
    ${radius + radius * Math.sin(45 * pi)}px
  ) rotate(${0 - step.value * everyStep}deg)`
            break
          case 1:
            item.style.transform = `translate(
    ${radius - radius * Math.cos(75 * pi)}px,
    ${radius + radius * Math.sin(75 * pi)}px
  ) rotate(${0 - step.value * everyStep}deg)`
            break
          case 2:
            item.style.transform = `translate(
    ${radius + radius * Math.cos(75 * pi)}px,
    ${radius + radius * Math.sin(75 * pi)}px
  ) rotate(${0 - step.value * everyStep}deg)`
            break
          case 3:
            item.style.transform = `translate(
    ${radius + radius * Math.cos(45 * pi)}px,
    ${radius + radius * Math.sin(45 * pi)}px
  ) rotate(${0 - step.value * everyStep}deg)`
            break
          case 4:
            item.style.transform = `translate(
    ${radius + radius * Math.cos(15 * pi)}px,
    ${radius + radius * Math.sin(15 * pi)}px
  ) rotate(${0 - step.value * everyStep}deg)`
            break
          case 5:
            item.style.transform = `translate(
    ${radius + radius * Math.cos(15 * pi)}px,
    ${radius - radius * Math.sin(15 * pi)}px
  ) rotate(${0 - step.value * everyStep}deg)`
            break
          case 6:
            item.style.transform = `translate(
    ${radius + radius * Math.cos(45 * pi)}px,
    ${radius - radius * Math.sin(45 * pi)}px
  ) rotate(${0 - step.value * everyStep}deg)`
            break
          case 7:
            item.style.transform = `translate(
    ${radius + radius * Math.cos(75 * pi)}px,
    ${radius - radius * Math.sin(75 * pi)}px
  ) rotate(${0 - step.value * everyStep}deg)`
            break
          case 8:
            item.style.transform = `translate(
    ${radius - radius * Math.cos(75 * pi)}px,
    ${radius - radius * Math.sin(75 * pi)}px
  ) rotate(${0 - step.value * everyStep}deg)`
            break
          case 9:
            item.style.transform = `translate(
    ${radius - radius * Math.cos(45 * pi)}px,
    ${radius - radius * Math.sin(45 * pi)}px
  ) rotate(${0 - step.value * everyStep}deg)`
            break
          case 10:
            item.style.transform = `translate(
    ${radius - radius * Math.cos(15 * pi)}px,
    ${radius - radius * Math.sin(15 * pi)}px
  ) rotate(${0 - step.value * everyStep}deg)`
            break
          case 11:
            item.style.transform = `translate(
    ${radius - radius * Math.cos(15 * pi)}px,
    ${radius + radius * Math.sin(15 * pi)}px
  ) rotate(${0 - step.value * everyStep}deg)`
            break
        }
      })
    }

    return { circleNode, stop, go, goForward, goBack }
  },
})
</script>

<style lang="scss" scoped>
@function pow($number, $exp) {
  $value: 1;
  @if $exp > 0 {
    @for $i from 1 through $exp {
      $value: $value * $number;
    }
  } @else if $exp < 0 {
    @for $i from 1 through -$exp {
      $value: $value / $number;
    }
  }
  @return $value;
}

@function fact($number) {
  $value: 1;
  @if $number > 0 {
    @for $i from 1 through $number {
      $value: $value * $i;
    }
  }
  @return $value;
}

@function pi() {
  @return 3.14159265359;
}

@function rad($angle) {
  $unit: unit($angle);
  $unitless: $angle / ($angle * 0 + 1);
  // If the angle has 'deg' as unit, convert to radians.
  @if $unit == deg {
    $unitless: $unitless / 180 * pi();
  }
  @return $unitless;
}

@function sin($angle) {
  $sin: 0;
  $angle: rad($angle);
  // Iterate a bunch of times.
  @for $i from 0 through 10 {
    $sin: $sin + pow(-1, $i) * pow($angle, (2 * $i + 1)) / fact(2 * $i + 1);
  }
  @return $sin;
}

@function cos($angle) {
  $cos: 0;
  $angle: rad($angle);
  // Iterate a bunch of times.
  @for $i from 0 through 10 {
    $cos: $cos + pow(-1, $i) * pow($angle, 2 * $i) / fact(2 * $i);
  }
  @return $cos;
}

@function tan($angle) {
  @return sin($angle) / cos($angle);
}

.box {
  position: relative;
  width: 1200px;
  height: 1200px;
  //padding: 20px;
  margin: 100px auto;
  border-radius: 50%;
  background: #fb3;

  .wrapper {
    position: absolute;
    top: -100px;
    left: -100px;
    width: 260px;
    height: 260px;
    background: red;

    img {
      width: 188px;
      height: 188px;
      object-fit: cover;
    }
  }
}

$radius: 600px;
.wrapper:first-child {
  transform: translate(
    $radius - $radius * cos(45deg),
    $radius + $radius * sin(45deg)
  );
}
.wrapper:nth-child(2) {
  transform: translate(
    $radius - $radius * cos(75deg),
    $radius + $radius * sin(75deg)
  );
}
.wrapper:nth-child(3) {
  transform: translate(
    $radius + $radius * cos(75deg),
    $radius + $radius * sin(75deg)
  );
}
.wrapper:nth-child(4) {
  transform: translate(
    $radius + $radius * cos(45deg),
    $radius + $radius * sin(45deg)
  );
}
.wrapper:nth-child(5) {
  transform: translate(
    $radius + $radius * cos(15deg),
    $radius + $radius * sin(15deg)
  );
}
.wrapper:nth-child(6) {
  transform: translate(
    $radius + $radius * cos(15deg),
    $radius - $radius * sin(15deg)
  );
}
.wrapper:nth-child(7) {
  transform: translate(
    $radius + $radius * cos(45deg),
    $radius - $radius * sin(45deg)
  );
}
.wrapper:nth-child(8) {
  transform: translate(
    $radius + $radius * cos(75deg),
    $radius - $radius * sin(75deg)
  );
}
.wrapper:nth-child(9) {
  transform: translate(
    $radius - $radius * cos(75deg),
    $radius - $radius * sin(75deg)
  );
}
.wrapper:nth-child(10) {
  transform: translate(
    $radius - $radius * cos(45deg),
    $radius - $radius * sin(45deg)
  );
}
.wrapper:nth-child(11) {
  transform: translate(
    $radius - $radius * cos(15deg),
    $radius - $radius * sin(15deg)
  );
}
.wrapper:nth-child(12) {
  transform: translate(
    $radius - $radius * cos(15deg),
    $radius + $radius * sin(15deg)
  );
}

.container-wrapper {
  position: relative;
  height: 500px;
  margin-top: 50px;
  overflow: hidden;
  .container {
    position: absolute;
    top: -950px;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
