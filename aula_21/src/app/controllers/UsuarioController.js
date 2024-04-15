const Usuario = require("../models/Usuario")

class UsuarioController{
    index(req,res){
        Usuario.mostrarTodos().then(
            resposta =>{
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta =>{
                console.debug(resposta)
                res.status(resposta[0]).json("Erro: "+resposta[1].errno)
            }
        )
    }

    show(req,res){
        let {usuario_id} = req.params
        Usuario.mostrarUsuario(usuario_id).then(
            resposta =>{
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta =>{
                console.debug(resposta)
                res.status(resposta[0]).json("Erro: "+resposta[1].errno)
            }
        )
    }

    create(req,res){
        let {nome,usuario,senha,usuario_tipo} = req.body
        Usuario.inserir(nome,usuario,senha,usuario_tipo).then(
            resposta =>{
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta =>{
                console.debug(resposta)
                res.status(resposta[0]).json("Erro: "+resposta[1].errno)
            }
        )
    }

    logar(req,res){
        let {usuario,senha} = req.body
        Usuario.verificaUsuarioSenha(usuario,senha).then(
            resposta =>{
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta =>{
                console.debug(resposta)
                res.status(resposta[0]).json("Erro: "+resposta[1].errno)
            }
        )
    }
}

module.exports = new UsuarioController()