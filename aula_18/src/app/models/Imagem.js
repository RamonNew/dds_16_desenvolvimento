const mysql = require("mysql2")
const dbConfig = require("../config")
//Diretorio do script sendo executado
const caminhoServer = require("path")

class Imagem{
    constructor(){
        this.conexao = mysql.createConnection(dbConfig.db)
    }
    inserir(arquivo,alternativo,nomeImagem){
        let sql = `INSERT INTO anuncios (alternativo, caminho) VALUE ('${alternativo}','${nomeImagem}')`
        this.conexao.query(sql, function(erro, retorno){
            if(erro) throw erro
            arquivo.mv(caminhoServer + "/../public/img/" +nomeImagem)
        })    
    }
}
module.exports = new Imagem()