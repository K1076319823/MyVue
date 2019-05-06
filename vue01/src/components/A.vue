<template>
    <div class="moduleA">
        <h1>这是组件A</h1>
        <router-link to="./A/D">A子组件</router-link>
        <router-view></router-view>
    </div>
</template>

<script>

import D from './components/D.vue'
export default {
    name:"A"
}
</script>

<style scoped>
    .moduleA{
        width: 100%;
        height: 80%;
        background-color: lightslategray;
    }
</style>
