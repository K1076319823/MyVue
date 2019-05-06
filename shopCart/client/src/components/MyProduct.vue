<template>
  <!--测试显示-------------文本-->
    <div class="product">
      <!--<h1>product组件</h1>-->
      <div class="container-fluid">
         <!--设置行row-->
        <div class="row">
          <!--左边的按钮组-->

          <div class="col-sm-3">
             <button class="btn btn-default btn-block" @click="getProsByCartBtn('全部')" :class="{'btn-primary':selectName==='全部'? true:false}">全部</button>
            <!--以下按钮未来需要通过数据动态生成,不能写死-->
            <button class="btn btn-default btn-block" v-for="btn in cateBtn"@click="getProsByCartBtn(btn)" :class="{'btn-primary':selectName===btn ? true:false}">{{btn}}</button>
          </div>
          <!--右边的商品列表-->
          <div class="col-sm-8">
            <!--一件商品,未来根据数据动态生成-->
            <!--<div v-for="(pro,key) in allPros" :key="key">-->
            <!--<div v-for="(pro,key) in catePros" :key="key">-->
            <div v-for="(pro,key) in pagePros" :key="key">
              <h3>{{pro.name}}
                <span class="pull-right label label-primary">{{pro.price}}</span>
              </h3>
              <button class="btn btn-success pull-right" @click="addPro(pro)">加入购物车</button>
              <div class="clearfix"></div>
              <p class="lead">{{pro.desc}}</p>
            </div>
            <!--按钮组-->
            <div class="pull-right">
              <button class="btn btn-default" v-for="page in pages" @click="showProsByPage(page )">{{page}}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import Vue from 'vue'
    export default {
        name: "MyProduct",
      data(){
          return {
            //所有商品的数组
            allPros:[],
            //分类按钮的数组
            cateBtn:[],
            //分类商品的数组
            catePros:[],
            selectName:'全部',
            //分页商品数组
            pagePros:[],
            //分类按钮的数组
            pages:[]

          };
      },
      mounted(){
          //当组件挂载完毕时发起网络请求(异步执行)
        Vue.axios.get('/api/allProduct').then((res)=>{
          console.log(res.data);
          this.allPros=res.data;
          //处理分类按钮的过滤逻辑
          console.log('请求成功')
           this.dealCategoryBtn(res .data);
          //显示默认商品列表
          this.getProsByCartBtn('全部');

          this.getPageCount()
        }).catch((error)=>{
          console.log('请求出错',error)
        })
      },
methods:{
  //处理分类按钮的函数
  dealCategoryBtn(d){
    const obj={};
    for(let i=0;i<d.length;i++){
      obj[d[i].category]=true;
    }
    console.log(obj)
    this.cateBtn=Object.keys(obj)

  //   let arr=[];
  //   for(let item of d){//es6的写法
  //     arr=[...new Set([...arr,pro.category])]
  //   }
  //   console.log(arr);
  //   this.cateBtn=arr;
  },
  //添加商品至购物车方法
  addPro(p){//形参
    this.$parent.sendPro(p);//实参
    // obj={pro:p,count:2}
    // arr.push(obj)
  },
  //分类按钮的点击事件
  getProsByCartBtn(cName){
    if ('全部'===cName){
      this.catePros=this.allPros;
    }else{
      this.catePros=this.allPros.filter((pro)=>{
        return cName===pro.category;
      })
    }
    this.selectName=cName;
    this.getPageCount();
    this.showProsByPage(1)
    // console.log(cName)
  },
  //分页按钮算法
  getPageCount(){//向上取整
    const count=Math.ceil(this.catePros.length/3);
    let countArr=[];
    for(let i=1;i<=count;i++){
      countArr.push(i)
    }
    this.pages=countArr;
  },
  showProsByPage(i){
    this.pagePros=this.catePros.slice((i-1)*3,i*3);
  }

}
    }
</script>

<style scoped>

</style>
