const Parafuso = require("../models/Parafuso")

class ParafusoController {
    //Criando o crud
    create(req, res) {
        let {nome} = req.body
        let {id_categoria} = req.body

        Parafuso.inserirParafuso(nome,id_categoria).then(
            resposta => {
                console.debug("Inserindo Parafuso")
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta => {
                console.debug("Erro: Inserindo Parafuso")
                res.status(resposta[0]).json(resposta[1])
            }
        )
    }
    read(req, res) {
        Parafuso.mostrarParafusos().then(
            resposta => {
                console.debug("Mostrando Parafusos")
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta => {
                console.debug("Erro: Mostrando Parafusos")
                res.status(resposta[0]).json(resposta[1])
            }
        )
    }
    update(req, res) {
        let { id_parafuso } = req.params
        let { nome } = req.body
        let {id_categoria} = req.body

        Parafuso.atualizarParafuso(id_parafuso, nome,id_categoria).then(
            resposta => {
                console.debug("Atualizando Parafuso")
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta => {
                console.debug("Erro: Atualizando Parafuso")
                res.status(resposta[0]).json(resposta[1])
            }
        )
    }
    delete(req, res) {
        let { id_parafuso } = req.params

        Parafuso.deletarParafuso(id_parafuso).then(
            resposta => {
                console.debug("Deletando Parafuso")
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta => {
                console.debug("Erro: Deletando parafuso")
                res.status(resposta[0]).json(resposta[1])
            }
        )
    }
}

module.exports = new ParafusoController()