import { useState, useEffect } from 'react'

function Principal() {
    const [parafusos, setParafusos] = useState([])
    const [nome, setNome] = useState('')
    const id_usuario = localStorage.getItem("id_usuario")
    useEffect(() => {
        document.title = "Tela Principal Sistema"

        
        if(!id_usuario){
            window.location.href = "./"
        }
        pegarNome()
        listarParafusos()
    },[])
    async function pegarNome(){
        try {
            if(!id_usuario){
                window.location.href = "./"
            }
            
            const resposta = await fetch(`/usuarios/${id_usuario}`)

            if (!resposta.ok){
                throw new Error("HTTP Erro"+resposta.status)
            }

            const dados = await resposta.json()
            setNome(dados.nome)
        } catch (error) {
            throw new Error("HTTP Erro"+error)
        }
    }
    async function listarParafusos(){
        try {
            const resposta = await fetch("/parafuso")
            const dados = await resposta.json()
            setParafusos(dados)
        } catch (error) {
            
        }
    }

    async function logout(){
        localStorage.clear()
        window.location.replace("./")
    }
    return (
        <div className='container'>
            <div className='bg-primary py-2 px-5 text-end'>
                <span className='text-white float-start fs-4'>Usuário | {nome} </span>
                <button className='btn btn-warning' onClick={logout}>Logout</button>
            </div>
            <a className='btn btn-primary mt-5' href="/cadastroParafuso">Cadastrar Parafuso</a>
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