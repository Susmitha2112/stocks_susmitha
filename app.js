const express=require('express');
const app=express();
const data=require('./data.json');
const ejs=require('ejs');
const cors=require('cors');
const bodyparser=require("body-parser");
app.use(cors());
app.use(express.json());
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());
app.use(express.urlencoded({extended:true}));
app.use("/datas",express.static('datas'));
app.use('/stylesheet',express.static('stylesheet'));
app.set("view engine",'ejs');

const stock_data=data.stocks;
app.get('/',(req,res)=>{
   res.render('index')
});
app.get('/data',(req,res)=>{
    res.render("data",{data:stock_data});
})
app.listen(3000,()=>{
    console.log("Server Connected!.....")
})