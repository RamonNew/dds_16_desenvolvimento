const Categoria = require("../models/Categoria")

class CategoriaController {
    //Criando o crud
    create(req, res) {
        let {nome} = req.body

        Categoria.inserirCategoria(nome).then(
            resposta => {
                console.debug("Inserindo Categoria")
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta => {
                console.debug("Erro: Inserindo Categoria")
                res.status(resposta[0]).json(resposta[1])
            }
        )
    }
    read(req, res) {
        Categoria.mostrarCategorias().then(
            resposta => {
                console.debug("Mostrando Categorias")
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta => {
                console.debug("Erro: Mostrando Categorias")
                res.status(resposta[0]).json(resposta[1])
            }
        )
    }
    update(req, res) {
        let { id_categoria } = req.params
        let { nome } = req.body

        Categoria.atualizarCategoria(id_categoria, nome).then(
            resposta => {
                console.debug("Atualizando Categoria")
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta => {
                console.debug("Erro: Atualizando Categoria")
                res.status(resposta[0]).json(resposta[1])
            }
        )
    }
    delete(req, res) {
        let { id_categoria } = req.params

        Categoria.deletarCategoria(id_categoria).then(
            resposta => {
                console.debug("Deletando Categoria")
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta => {
                console.debug("Erro: Deletando Categoria")
                res.status(resposta[0]).json(resposta[1])
            }
        )
    }
}

module.exports = new CategoriaController()