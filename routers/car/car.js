const express = require('express');
const router = express.Router(); 

const cars = [
    {
        name :"BMW",
        price : 150.000
    },
    {
        name : "Mercedes",
        price : 200.000
    }
]

router.get("/",(req,res)=>{
    response.status(200).json(cars);
})


module.exports = router;