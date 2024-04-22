const mysql = require("mysql2")
const dbConfig = require("../config")
//Diretorio do script sendo executado
const caminhoServer = require("path")
const { rejects } = require("assert")

class Imagem{
    constructor(){
        this.conexao = mysql.createConnection(dbConfig.db)
    }
    mostrarTodos(){
        return new Promise((resolve,reject)=>{
            let sql = `SELECT * FROM anuncios`
            this.conexao.query(sql, function(erro, retorno){
                if(erro){
                    reject([400,erro])
                }   
                else{
                    resolve([200,retorno])
                }
            }) 
        })
    }
    inserir(arquivo,alternativo,nomeImagem){
        return new Promise ((resolve, reject)=>{
            let sql = `INSERT INTO anuncios (alternativo, caminho) VALUE ('${alternativo}','${nomeImagem}')`
            this.conexao.query(sql, function(erro, retorno){
                if(erro){
                    reject([400,erro])
                }   
                else{
                    arquivo.mv(caminhoServer + "/../public/img/" +nomeImagem)
                    resolve([201,"Inserido"])
                }
            })  
        })        
    }
}
module.exports = new Imagem()