const express = require('express');
const ejs = require('ejs');
const path = require('path');
const qrcode = require('qrcode');
const app=express()

app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use(express.static('public'))

app.set('view engine','ejs')
app.set('views',path.join(__dirname,'view'))

app.get("/", function(req,res){
    res.render("index.ejs")
});
app.post("/scan", function(req,res){    
   const inputtx = req.body.text 
   qrcode.toDataURL(inputtx,(err,src)=>{
    res.render('scan',{
        qr_code:src,
    })
   })
//    console.log(inputtx)
});

app.listen(3000, function () {
    console.log("server is running on 3k.....")
});