const express = require("express")
const router = express.Router
//const {Router} = require("express")
const routes = new router()
const sites = require("./app/controllers/SitesController")

routes.get("/", (req,res)=>{    
    res.sendFile("painel.html",{root:'./public'})    
})

routes.get("/sites",sites.index)

routes.get("/sites/:id",sites.show)

module.exports = routes