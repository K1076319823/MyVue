let express=require('express');
const mongoose=require('mongoose')
let app=express();
let db=mongoose.connect('mongodb://localhost/thirdDb',{useNewUrlParser:true});
mongoose.connection.on('open', ()=>{
    console.log('数据库连接成功');
    let schema = new mongoose.Schema({
        name:{type:'String',default:'未知'},
        price:{type:'String',default:'未知'},
        desc:{type:'String',default:'未知'},
        category:{type:'String',default:'未知'}
    },{collection:'shopCar'});

    let model = mongoose.model('shopCar',schema);
    // 增加一条数据
    model.create({
        name:'衣服',
        price:'1000',
        desc:'1',
        category:'服装'
    },function(err,res){//通过回调函数判断插入是否成功
        if(!err){
            console.log("插入数据成功")
        }else{
            console.log("插入数据失败",err)
        }
    });
    //增加多条数据
    for (let i=0;i<10;i++){
        model.create({
            name:'衣服'+i,
            price:'1000',
            desc:'1',
            category:'服装'
        },function(err,res){//通过回调函数判断插入是否成功
        });
    }


    app.get('/api/allProduct',function(req,res){
        model.find(function(error,response){
            res.json(response);
        });
    })
})
app.listen(8080)