<template>
  <div id="app">
    <MyHeader/>
    <!-- 插座 -->
    <router-view></router-view>
  </div>
</template>

<script>

import MyHeader from './components/MyHeader'
import A from './components/A'
import B from './components/B'


export default {
  name: 'App',
  components: {
    MyHeader,A,B
  }
}
</script>

<style>

  *{
    margin: 0;
    padding: 0;
  }

  html,body{
    width: 100%;
    height: 100%;
    background-color: lightcoral;
  }

  #app{
    background-color: lightgoldenrodyellow;
    border: 1px double lightblue;
  }
</style>
