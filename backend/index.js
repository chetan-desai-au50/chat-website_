const express=require('express');

const app=express();
const port = process.env.PORT || 5000;

app.get('/',(req,res)=>{
    res.send("hello from express js")
})

app.listen(port,()=>{
    console.log(`server is running port ${port}...`)
})