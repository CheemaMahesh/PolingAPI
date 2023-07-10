//importing the express
const express=require('express');
const Port=8000;
const db=require('./config/mongoose');

const app=express();


app.use(express.urlencoded(
    {
       // extended:true
   }
));

//making routes available in index.js(middleware);
app.use('/',require('./routes'));


//Start
app.listen(Port,function(err){
    if(err){console.log("error in starting the server");return}

console.log("sever is up and running on port:-",Port);

})