<template>
    <div>
        <h2>I'm Child</h2>
        <ul>
            <li v-for="(item, idx) in data" :key="idx">{{ item }}</li>
        </ul>
    </div>
</template>

<script>
import { defineComponent, ref, reactive, toRefs, watch, computed } from 'vue'

export default defineComponent({
    props: {
        data: {
            type: Array,
            default: () => []
        },
        count: {
            type: Number,
            default: 0
        }
    },
    setup(props) {
        console.log(props.data)

        watch(() => props.count, () => {
            console.log('child watch', props.count)
        })
    }
})
</script>