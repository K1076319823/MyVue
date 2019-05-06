<template>
  <div id="app">
    <MyHeader/>
  </div>
</template>

<script>
import MyHeader from './components/MyHeader'
export default {
  name: 'App',
  components: {
    MyHeader
  }
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
  }

  #app{
    background-color: lightgoldenrodyellow;
    border: 1px double lightblue;
  }
</style>
