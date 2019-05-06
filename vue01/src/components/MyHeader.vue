<template>
    <div class="myheader">
        <h1>header组件</h1>
        <router-link :to="{path:'/A'}">跳转A组件</router-link>
        <router-link :to="{path:'/B'}">跳转B组件</router-link>
    </div>
</template>
<script>

export default {
    name:'MyHeader'
}
</script>
<style>
.myheader{
        width: 100%;
        height: 20%;
        background-color: lightblue;
        text-align: center;
        color: white;
        line-height: 80px;
    }
</style>
