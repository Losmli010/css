<template>
  <div>
    <h1>ref: {{ text }}</h1>
    <div>
      reactive: <button @click="plusOne">{{ count }}</button>
    </div>
    <div>computed: {{ computedAge }}</div>

    <child :data="childData" :count="count" />
  </div>
</template>

<script>
import {
  defineComponent,
  ref,
  reactive,
  toRefs,
  watch,
  computed,
  onMounted,
  onBeforeUnmount,
  onUnmounted,
} from 'vue'
import Child from './components/Child.vue'

export default defineComponent({
  components: {
    Child,
  },
  setup() {
    const text = ref('Vue3 setup')
    const state = reactive({ count: 0 })

    const childData = ref([1, 2, 3])

    console.log('created')

    const age = ref(18)
    const computedAge = computed(() => age.value + 1)

    watch(
      () => state.count,
      () => {
        console.log('watch')
        console.log(state.count)
      }
    )

    onMounted(() => {
      console.log('mounted')
    })

    onBeforeUnmount(() => {
      console.log('before unmounted')
    })

    onUnmounted(() => {
      console.log('unmounted')
    })

    const plusOne = () => {
      state.count += 1
      console.log('plus one')
    }

    console.log('setup end')

    plusOne()

    return {
      text,
      ...toRefs(state),
      computedAge,
      plusOne,

      childData,
    }
  },
})
</script>
