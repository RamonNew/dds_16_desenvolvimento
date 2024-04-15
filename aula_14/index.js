const express = require("express")
const server = express()

server.use(express.json())

let sites = [
    {id:1, name:"SENAI ES", site:"https://senaies.com.br/"},
    {id:2, name:"FINDES", site:"https://findes.com.br/"},
    {id:3, name:"Portal da Industria", site:"https://www.portaldaindustria.com.br/senai/"}
]

server.get("/sites", (req,res)=>{
    return res.json(sites)
})

server.get("/sites/:id",(req,res)=>{
    const id = parseInt(req.params.id)
    const site = sites.find(function(site){
        return site.id === id
    })

    let status = ""
    if(site){
        status = 200
    }else{
        status = 404
    }


    console.log(site)
    return res.status(status).json(site)
})

server.listen(3000)