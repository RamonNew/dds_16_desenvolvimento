const express = require("express")
const router = express.Router
//const {Router} = require("express")
const routes = new router()
const sites = require("./app/controllers/SitesController")
const imagens = require("./app/controllers/ImagemController")
const usuarios = require("./app/controllers/UsuarioController")

routes.get("/", (req,res)=>{    
    res.sendFile("painel.html",{root:'./public'})    
})

routes.get("/lateral", (req,res)=>{    
    res.sendFile("lateral.html",{root:'./public'})    
})

routes.post("/imagens",imagens.create)
routes.get("/imagens",imagens.index)

routes.get("/sites",sites.index)

routes.get("/sites/:id",sites.show)

routes.post("/usuarios",usuarios.create)
routes.post("/logar",usuarios.logar)

routes.get("/usuarios",usuarios.verificaToken,usuarios.index)
//routes.get("/usuarios",usuarios.index)
routes.get("/usuarios/:usuario_id",usuarios.show)
routes.delete("/usuarios/:usuario_id",usuarios.destroy)
routes.put("/usuarios/:usuario_id",usuarios.update)

module.exports = routes