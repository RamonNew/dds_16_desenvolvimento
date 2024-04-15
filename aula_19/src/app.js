const express = require("express")
const routes = require("./routes")
const fileupload = require("express-fileupload")

class App{
    constructor(){
        this.server = express()
        this.middlewares()
        this.routes()
    }

    middlewares(){
        // Middleware para analisar JSON no corpo das requisições
        this.server.use(express.json())

        //Comando que permite acessar diretório com arquivos staticos
        this.server.use(express.static("public"))

        //Fazer uso do file upload
        this.server.use(fileupload())

        this.server.use(express.urlencoded({extended:false}))
    }
    routes(){
        this.server.use(routes)
    }
}

//const App = new App() 
module.exports = new App().server
