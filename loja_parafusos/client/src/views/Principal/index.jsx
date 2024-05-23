import { useState, useEffect } from 'react'

function Principal() {
    const [parafusos, setParafusos] = useState([])
    useEffect(() => {
        document.title = "Tela Principal Sistema"

        const id_usuario = localStorage.getItem("id_usuario")
        if(!id_usuario){
            window.location.href = "./"
        }
        
        listarParafusos()
    },[])

    async function listarParafusos(){
        try {
            const resposta = await fetch("/parafuso")
            const dados = await resposta.json()
            setParafusos(dados)
        } catch (error) {
            
        }
    }
    return (
        <div>
            <a href="/cadastroParafuso">Cadastrar Parafuso</a>
            {parafusos.map(
                parafuso => (
                    <div key={parafuso.id_parafuso}>
                        <div>Id: {parafuso.id_parafuso} Nome: {parafuso.nome} Categoria: {parafuso.categoria}</div>
                    </div>
                )
            )}
        </div>
    )
}

export default Principal