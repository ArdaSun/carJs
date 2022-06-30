const express = require('express')
const app = express()


const routers = 
    {
        car: require("./routers/car/car"),
        user:require("./routers/user/user")
    }    


app.use("/car",routers.car)
app.use("/user",routers.user)


app.get("/cars",(request,response)=>{
    
    response.status(200).json({car:cars});
})

app.listen(80)