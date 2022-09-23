const express=require("express")
const app=express()
const fs=require("fs")

app.post("/createfile",function(req,res){
    let timeStamp = new Date()
    let date = timeStamp.toDateString()
    let hours = timeStamp.getHours()
    let minutes = timeStamp.getMinutes()
    let seconds = timeStamp.getSeconds()
    let dateTime = `${date} - ${hours}:${minutes}:${seconds}`
    let timestamp=Date.now()
   fs.writeFile(`./newfile/${dateTime}.txt`,`${timestamp}`,function(err){
    if(err) throw err
    res.json({message:"file created"})
   })
})


app.get("/readfile",function(req,res){
    fs.readdir("newfile",function(err,files){
        if(err) throw err
        res.json({files})
    })

})


app.listen(process.env.PORT||3000)