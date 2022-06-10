const express= require("express");
const app =express()

const fileupload=require("express-fileupload")
app.use(fileupload({
    useTempFiles:true
}))

var cloudinary=require("cloudinary")

cloudinary.config({

    cloud_name :"quatics",
    api_key: "125484742355846",
    api_secret :"acTlHPBeYDSJe_2HQ_Lufp59Q58"
})

app.post("/upload",(req,res) =>{
    const file =req.files.photo
    cloudinary.uploader.upload(file.tempFilePath, function(result,err){
        console.log(err)
        console.log("result",result)
        res.send({
            success:result,
            
        })
    })
})

app.get("/",(req,res)=>{
    res.send("hello")
})


PORT=5000

app.listen(PORT,( ) =>{
    console.log(`Server is running on http://localhost:${PORT}`)

})