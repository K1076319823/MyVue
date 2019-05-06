<template>
  <div id="app">
  <MyHeader :t-count="getTotalCount"></MyHeader>
    <router-view></router-view>
  </div>
</template>

<script>
import MyHeader from "./components/MyHeader";
export default {
  name: 'App',
  components: {MyHeader},
  data(){
    return {
      proArr:[],
      count:0,
    }
  },
  methods:{
//     sendPro(p){
//       console.log(p)
//       // console.log('app接受传入的商品:',p);
//       //第一次添加
//       if(this.proArr.length==0){
//            const obj={product:p,count:1};
//            this.proArr.push(obj);
//       }else{
//         //以后添加 已有商品 ,未添加商品
//         // for(let pro in this.proArr){for没有必要
//         //   if(pro.product._id===p._id){
//         //     pro.count++;
//         //   }else{
//         //    let isHas= this.proArr.some((v)=>{
//         //       return v.product._id===pro._id
//         //     })
//         //   }
//         // }
//
//            let isHas= this.proArr.some((v)=>{
//               return v.product._id===p._id
//             });
//            if(isHas){
//              //找到对应的对象,将其count++;
//              const arr=this.proArr.filter((v)=>{
//                return v.product._id===p._id;
//              });
//              arr[0].count++;
//            }else{//对象是址传递
//              //创建新的obj对象,count=1
//              this.proArr.push(obj)
//            }
//       }
// console.log(this.proArr)
//
//     }
    sendPro(p) {
      const obj = {product:p, count:1};
      //第一次添加
      if (this.proArr.length == 0) {
        this.proArr.push(obj);
      } else {
        //以后添加 已有商品, 未添加商品
        let isHas = this.proArr.some((v)=>{
          return v.product._id === p._id;
        });
        if (isHas) {
          // 找到对应的对象, 将其count++
          const arr = this.proArr.filter((v)=>{
            return v.product._id === p._id;
          });
          arr[0].count++;
        } else {
          // 创建新的obj对象, count=1
          this.proArr.push(obj);
        }
      }
      console.log(this.proArr);
    },
    getPro(){
      // return [...this.proArr];
      return this.proArr
    },

    // deletePro(index){
    //  console.log(index)
    // }
  },
  computed:{
    getTotalCount(){
      this.count=0;
      this.proArr.map((v)=>{
        this.count+=v.count;
      })
      return this.count;
    }
  }
}
</script>

<style>
     @import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
  /*引入bootstrap样式*/
</style>
