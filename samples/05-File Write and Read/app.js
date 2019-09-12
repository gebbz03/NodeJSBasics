const fs=require('fs');
fs.readFile('./db.json','utf-8',function(err,data){
        const d=JSON.parse(data);
        console.log(d.message);
});



fs.readdir('./',function(err,data){
console.log(data);

});

const temp={
    greeting:'Welcome To Node JS'
}

fs.writeFile('db2.json',JSON.stringify(temp),function(err,data){
console.log('File created.')
});