<template>
    <div>
        <event-loop />
        <promise />
    </div>
</template>

<script>
import EventLoop from './components/EventLoop.vue'
import Promise from './components/Promise.vue'

export default {
    components: {
        EventLoop,
        Promise
    }
}
</script>