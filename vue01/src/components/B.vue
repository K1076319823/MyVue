<template>
    <div class="B">
      <div class="left">
         <router-link :to="{path:'/B/C'}">二级路由</router-link>
      </div>
      <div class="right">
     <router-view></router-view>
      </div>
    </div>
</template>

<script>
    export default {
        name: "B"
    }
</script>

<style scoped>
  .B{
    width:100%;
    height: 100%;
    background-color:red;
  }
  .left{
    width: 20%;
    height: 100%;
    background-color: greenyellow;
    float: left;
  }
  .right{
    width: 80%;
    height: 100%;
    background-color:yellow;
  }
</style>
