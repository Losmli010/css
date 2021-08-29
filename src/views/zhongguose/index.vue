<template>
    <div class="demo">
        <button @click="show = !show" class="btn">过渡效果</button>

        <transition-group v-if="show" name="fade" tag="div">
            <button v-for="color in colors" :key="color.name" :style="{background: color.hex}" class="btn">{{ color.name }}</button>
        </transition-group>
    </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { zhongguose } from './zhongguose.js'

export default defineComponent({
    setup() {
        const show = ref(true)
        const colors = ref(zhongguose)

        return { show, colors }
    }
})
</script>

<style lang="scss" scoped>
@import './transition.scss';

.demo {

}
.btn {
    font-size: 14px;
    display: inline-block;
    margin: 0 1em 1em 0;
    border-radius: 4px;
    border: none;
    cursor: pointer;
    min-width: 80px;
}
</style>
