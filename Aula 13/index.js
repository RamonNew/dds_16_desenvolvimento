const express = require("express")
const server = express()

//Query
//localhost:3000/home?nome=Ramon&idade=18
//?nome=Ramon&idade=18

server.get("/home",(req,res)=>{
    //const nome = req.query.nome
    //const idade = req.query.idade
    const {nome, idade} = req.query
    res.json({
        nome:nome,
        idade:idade
    })
})
//Parametros da rota
//localhost:3000/home/ramon
server.get("/home/:nome", (req,res)=>{
    const {nome} = req.params
    return res.json({
        nome:nome
    })
})

server.listen(3000)
