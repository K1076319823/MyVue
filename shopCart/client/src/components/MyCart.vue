<template>
    <div class="cart">
      <div class="container-fluid">
        <h2>您的购物车</h2>
        <div class="alert alert-warning">
          <router-link :to="{path:'/product'}">点击返回商品列表</router-link>
        </div>
        <!--购物车列表-->
        <table class="table table-striped">
          <thead>
             <tr>
               <th>商品名称</th>
               <th>单价</th>
               <th>数量</th>
               <th>小计</th>
               <th>删除</th>
             </tr>
          </thead>
          <tbody>
          <tr v-for="(cp,i) in cartPro">
            <td>{{cp.product.name}}</td>
            <td>{{cp.product.price}}</td>
            <td>{{cp.count}}</td>
            <td>{{cp.product.price*cp.count}}</td>
            <td>
              <!--<button class="btn btn-danger" @click="$parent.deletePro(i)">删除</button>-->
              <button class="btn btn-danger" @click="deletePro(i)">删除</button>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
</template>

<script>
    export default {
        name: "MyCart",
      data(){
          return {
            cartPro:[]
          }
      },
      created(){
          this.cartPro=this.$parent.getPro()
      },
      methods:{
          deletePro(i){
             const obj=this.cartPro[i];
             if(obj.count>1){
               obj.count--
             }else{
               this.cartPro.splice(i,1)
             }
          }
      }
    }
</script>

<style scoped>

</style>
