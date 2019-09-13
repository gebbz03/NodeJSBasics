const express=require('express');
const app=express();
const port=8080;


app.use(express.static(__dirname));

const users=[
    {user:'Gebb Ebero',pass:'password'},
    {user:'Edz',pass:'secret'},
    {user:'Joe',pass:'pass'},
    {user:'Maming',pass:'pass'}
];

app.get('/users',function(req,res){
    res.send(users);
});



app.listen(port,function(){
    return console.log('Port is'+port); 
})