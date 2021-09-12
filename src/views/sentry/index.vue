<template>
    <div>
        <h1>sentry监控</h1>
        <ul>
            <li><button @click="throwErr" class="btn btn-red">throw</button></li>
            <li><button @click="promiseErr" class="btn btn-orange">reject</button></li>
            <li><button @click="catchErr" class="btn btn-yellow">catch</button></li>
            <li><button @click="asyncErr" class="btn btn-green">async</button></li>
        </ul>
    </div>
</template>

<script>
import { defineComponent, ref, reactive, toRefs, watch, computed, onMounted, onBeforeUnmount, onUnmounted } from 'vue'

export default defineComponent({
    setup() {
        const throwErr = () => {
            throw new Error('主动触发异常')
        }

        const promiseErr = () => {
            Promise.reject(new Error('promise reject'))
        }

        const catchErr = () => {
            try {
                throw new Error('try catch 处理异常')
            } catch(err) {
                console.log(err)
            }
        }

        const asyncErr = async () => {
            await fetch('https://www.google.com', {credentials: 'include'})
        }

        return {
            throwErr,
            promiseErr,
            catchErr,
            asyncErr
        }
    }
})
</script>

<style lang="scss" scoped>
.btn {
    font-size: 14px;
    display: inline-block;
    margin: 0 1em 1em 0;
    border-radius: 4px;
    border: none;
    cursor: pointer;
    min-width: 80px;
}
.btn-red {
    background: #C21F30;
}
.btn-orange {
    background: #EA8958;
}
.btn-yellow {
    background: #FECC11;
}
.btn-green {
    background: #43B244;
}
</style>