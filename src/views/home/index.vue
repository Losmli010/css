<template>
    <ul>
        <li v-for="(item, idx) in routes" :key="idx">
            <router-link :to="item.path">{{ item.meta.title }}</router-link>
        </li>
    </ul>
</template>

<script>
import { routes } from '@/router'

export default {
    data() {
        return {
            routes: routes
        }
    }
}
</script>

<style scoped>
li {
    list-style: none;
}
a {
    text-decoration: none;
}
</style>