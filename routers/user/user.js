const express = require('express');
const router = express.Router(); 

const users = [
    {
        name : "Berke",
        surname : "TÜRK"
    },
    {
        name:"Arda",
        surname : "GÜNEŞ"
    }
]


router.get("/",(request,response)=>{
    response.status(200).json(users);
    
    console.log(request.socket.remoteAddress);
})

router.get("/:id",(request,response)=>{
    let id = parseInt(request.params.id);
    if(isNaN(id)){
        response.setHeader("content-type", "text/html");
        response.end("Lütfen sayı girin");
        return;
    }
    response.status(200).json({user : users[request.params.id]});
})
router.get("/:id/name",(request,response)=>{
    response.status(200).json({name : users[request.params.id].name});
})

module.exports = router;