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
              <!-- span>{{ index }}</span -->
            </div>
          </div>
        </div>
      </div>
      <!-- div>
        <button @click="goForward">前进</button>
        <button @click="goBack">后退</button>
      </div -->
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
      if (!circleNode.value) return
      circleNode.value.style.transition = 'transform 0.4s ease-in-out'
      circleNode.value.style.transform = `rotate(${step.value * everyStep}deg)`
      Array.from(circleNode.value.children).map((item, index) => {
        item.style.transition = 'transform 0.4s ease-in-out'
        item.style.transform = `translate(
    ${radius + radius * Math.cos((45 + everyStep * (index + 1)) * pi)}px,
    ${radius + radius * Math.sin((45 + everyStep * (index + 1)) * pi)}px
  ) rotate(${0 - step.value * everyStep}deg)`
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
  margin: 0 auto;
  border-radius: 50%;
  background: #fb3;

  .wrapper {
    position: absolute;
    top: -130px;
    left: -130px;
    width: 260px;
    height: 260px;
    background: red;

    img {
      width: 260px;
      height: 260px;
      object-fit: cover;
    }
  }
}

$radius: 600px;
@for $i from 1 through 12 {
  .wrapper:nth-child(#{$i}) {
    transform: translate(
      $radius + $radius * cos(45deg + $i * 30deg),
      $radius + $radius * sin(45deg + $i * 30deg)
    );
  }
}

.container-wrapper {
  position: relative;
  height: 500px;
  margin-top: 50px;
  overflow: hidden;
  .container {
    position: absolute;
    top: -850px;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
