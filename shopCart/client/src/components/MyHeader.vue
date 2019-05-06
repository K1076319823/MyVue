<template>
    <div class="header">
      <!--<h1>header组件</h1>-->
      <!--<button class="btn btn-danger">按钮</button>-->
      <nav class="nav navbar navbar-inverse">
        <a href="###" class="navbar-brand pull-left">ZZH190101班购物车</a>

        <p class="navbar-text pull-right" >
          您的购物车当前一共有{{tCount}}件商品,总价格为{{tPrice}}元
          <button class="btn btn-danger" @click="btnChange">购物车</button>
        </p>

      </nav>
    </div>
</template>

<script>
    export default {
        name: "MyHeader",
      methods:{
        btnChange(){
          this.$router.push({path:'/cart'})
        }
      },
      props:{
          tCount:{
            type:Number,
            default:0
          },
        tPrice:{
            type:Number,
          default:0
        }
      }
      // computed:{
      //     getTotalCount(){
      //       let  allCount=0;
      //       for(let i in this.$parent.getPro()){
      //         allCount+=this.
      //       }
      //     }
      // }
    }
</script>

<style scoped>

</style>
