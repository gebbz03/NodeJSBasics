const express=require('express');
const app=express();
const port=8080;


//app.use(express.static(__dirname));

app.get('/',function(req,res){
    res.sendFile(__dirname+'/index2.html');
});

app.get('/3',function(req,res){
    res.sendFile(__dirname+'/index3.html');
});

app.listen(port,function(){
    return console.log('Port is'+port); 
})