const express = require("express")
const routes = require("./routes")

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
    }
    routes(){
        this.server.use(routes)
    }
}

//const App = new App() 
module.exports = new App().server
