const Imagem = require("../models/Imagem")
class ImagemController{
    //Mostra a lista de imagens
    index(req, res) {
        console.debug("GET :: /imagens")
        Imagem.mostrarTodos().then(
            resposta => {
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta => {
                console.debug(resposta[1])
                res.status(resposta[0]).json("Erro:"+resposta[1].errno)
            }
        )
    }

    //Inserindo uma imagem
    create(req,res){
        let alternativo = req.body.alternativo
        let nomeImagem = req.files.imagem.name
        //Separando extensão do arquivo
        nomeImagem = nomeImagem.split(".")
        //pegando extensão
        let extensao = nomeImagem[nomeImagem.length-1]
        if(extensao === "jpg"){
            nomeImagem = new Date().getTime() + "." + extensao
            let arquivo = req.files.imagem
            // O model retorna uma promessa o then é caso positivo e o catch negativo
            Imagem.inserir(arquivo,alternativo,nomeImagem).then(
                resposta => {
                    res.status(resposta[0]).json(resposta[1])
                }
            ).catch(
                resposta => {
                    console.debug(resposta[1])
                    res.status(resposta[0]).json("Erro:"+resposta[1].errno)
                }
            )
        }
        else{
            //Erro 415 é tipo de arquivo não suportado
            res.status(415).json({message:"Tipo de arquivo não suportado"})
        }
    }
}

module.exports = new ImagemController()