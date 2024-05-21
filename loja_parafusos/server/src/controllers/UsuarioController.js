const Usuario = require("../models/Usuarios")

class UsuarioController {
    //Criando o crud
    create(req, res) {
        /*let nome = req.body.nome
        let login = req.body.login
        let senha = req.body.senha*/

        let { nome, login, senha } = req.body

        Usuario.inserirUsuario(nome, login, senha).then(
            resposta => {
                console.debug("Inserindo Usuário")
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta => {
                console.debug("Erro: Inserindo Usuário")
                res.status(resposta[0]).json(resposta[1])
            }
        )
    }
    read(req, res) {
        Usuario.mostrarUsuarios().then(
            resposta => {
                console.debug("Mostrando Usuarios")
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta => {
                console.debug("Erro: Mostrando Usuarios")
                res.status(resposta[0]).json(resposta[1])
            }
        )
    }
    update(req, res) {
        let { id_usuario } = req.params
        let { nome, login, senha } = req.body

        Usuario.atualizarUsuario(id_usuario, nome, login, senha).then(
            resposta => {
                console.debug("Atualizando Usuário")
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta => {
                console.debug("Erro: Atualizando Usuário")
                res.status(resposta[0]).json(resposta[1])
            }
        )
    }
    delete(req, res) {
        let { id_usuario } = req.params

        Usuario.deletarUsuario(id_usuario).then(
            resposta => {
                console.debug("Deletando Usuário")
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta => {
                console.debug("Erro: Deletando Usuário")
                res.status(resposta[0]).json(resposta[1])
            }
        )
    }

    logar(req, res) {
        let { login, senha } = req.body

        Usuario.verificarLoginSenha(login, senha).then(
            resposta => {
                console.debug("Efetuando Login")
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta => {
                console.debug("Erro: Erro Efetuando Login")
                res.status(resposta[0]).json(resposta[1])
            }
        )
    }

}

module.exports = new UsuarioController()