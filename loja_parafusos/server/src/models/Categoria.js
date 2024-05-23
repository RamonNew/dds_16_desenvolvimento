const mysql = require("mysql2")
const config = require("../Config")

class Categoria {
    constructor() {
        this.conexao = mysql.createConnection(config.db)
    }

    inserirCategoria(nome) {
        let sql = `INSERT INTO categorias (nome) VALUE ("${nome}");`

        return new Promise((resolve, reject) => {
            this.conexao.query(sql, function (erro, retorno) {
                if (erro) {
                    reject([400, erro])
                }
                resolve([201, "Categoria Inserida"])
            })
        })
    }

    mostrarCategorias() {
        let sql = "SELECT * FROM categorias"

        return new Promise((resolve, reject) => {
            this.conexao.query(sql, function (erro, retorno) {
                if (erro) {
                    reject([400, erro])
                }
                resolve([200, retorno])
            })
        })
    }

    atualizarCategoria(id_categoria, nome) {
        let sql = `UPDATE categorias SET nome="${nome}" WHERE id_categoria="${id_categoria}";`

        return new Promise((resolve, reject) => {
            this.conexao.query(sql, function (erro, retorno) {
                if (erro) {
                    reject([400, erro])
                }else {
                    if (retorno["affectedRows"] > 0) {
                        resolve([200, "Categoria Atualizada"])
                    } else {
                        resolve([404, "Categoria não encontrada"])
                    }
                }
            })
        })
    }
    deletarCategoria(id_categoria) {
        let sql = `DELETE FROM categorias WHERE id_categoria="${id_categoria}";`

        return new Promise((resolve, reject) => {
            this.conexao.query(sql, function (erro, retorno) {
                if (erro) {
                    reject([400, erro])
                } else {
                    if (retorno["affectedRows"] > 0) {
                        resolve([200, "Categoria deletada"])
                    } else {
                        resolve([404, "Categoria não encontrada"])
                    }
                }

            })
        })
    }
}

module.exports = new Categoria()