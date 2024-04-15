const express = require("express")
const server = express()

server.use(express.json())

let sites = [
    {id:1, name:"SENAI ES", site:"https://senaies.com.br/"},
    {id:2, name:"FINDES", site:"https://findes.com.br/"},
    {id:3, name:"Portal da Industria", site:"https://www.portaldaindustria.com.br/senai/"}
]

//Mostrar lista
server.get("/sites", (req,res)=>{
    console.log("GET :: /sites", sites)
    return res.json(sites)
})

//Mostrar um elemento da lista
server.get("/sites/:id",(req,res)=>{
    const id = parseInt(req.params.id)
    const site = sites.find(function(site){
        return site.id === id
    })
    const status = site ? 200 : 404 //Operador ternário
    console.log(site)
    return res.status(status).json(site)
})

//Inserir um elemento na lista
server.post("/sites",(req,res)=>{
    const {name,site} = req.body
    const id = sites[sites.length-1].id+1
    const newSite = {id:id,name:name,site:site}

    sites.push(newSite)

    return res.status(201).json(newSite)
})

//Atualizar um registro 
server.put("/sites/:id", (req, res)=>{
    const id = parseInt(req.params.id)
    const {name,site} = req.body
    const index = sites.findIndex(function(site){
        return site.id === id
    })
    const status = index >= 0 ? 200:400
    if(index>=0){
        sites[index] = {id, name, site} //abreviando criação de objeto
    }
    
    return res.status(status).json(sites[index])
})

//Deletando um registro
server.delete("/sites/:id", (req, res)=>{
    const id = parseInt(req.params.id)
    const index = sites.findIndex(function(site){
        return site.id === id
    })
    const status = index >= 0 ? 200:404
    if(index>=0){
        sites.splice(index,1)
    }
    return res.status(status).json()
})

server.listen(3000)