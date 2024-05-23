const mysql = require("mysql2")
const config = require("../Config")

class Parafuso {
    constructor() {
        this.conexao = mysql.createConnection(config.db)
    }

    inserirParafuso(nome, id_categoria) {
        let sql = `INSERT INTO parafusos (nome,id_categoria) VALUE ("${nome}","${id_categoria}");`

        return new Promise((resolve, reject) => {
            this.conexao.query(sql, function (erro, retorno) {
                if (erro) {
                    reject([400, erro])
                }
                resolve([201, "Parafuso Inserido"])
            })
        })
    }

    mostrarParafusos() {
        let sql = "SELECT * FROM vw_parafusos"

        return new Promise((resolve, reject) => {
            this.conexao.query(sql, function (erro, retorno) {
                if (erro) {
                    reject([400, erro])
                }
                resolve([200, retorno])
            })
        })
    }

    atualizarParafuso(id_parafuso, nome,id_categoria) {
        let sql = `UPDATE parafusos SET nome="${nome}", id_categoria="${id_categoria}" WHERE id_parafuso="${id_parafuso}";`

        return new Promise((resolve, reject) => {
            this.conexao.query(sql, function (erro, retorno) {
                if (erro) {
                    reject([400, erro])
                }else {
                    if (retorno["affectedRows"] > 0) {
                        resolve([200, "Parafuso Atualizado"])
                    } else {
                        resolve([404, "Parafuso não encontrado"])
                    }
                }
            })
        })
    }
    deletarParafuso(id_parafuso) {
        let sql = `DELETE FROM parafusos WHERE id_parafuso="${id_parafuso}";`

        return new Promise((resolve, reject) => {
            this.conexao.query(sql, function (erro, retorno) {
                if (erro) {
                    reject([400, erro])
                } else {
                    if (retorno["affectedRows"] > 0) {
                        resolve([200, "Parafuso deletado"])
                    } else {
                        resolve([404, "Parafuso não encontrado"])
                    }
                }

            })
        })
    }
}

module.exports = new Parafuso()