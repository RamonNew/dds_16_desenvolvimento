import { useEffect, useState } from 'react'

function CadastroParafuso() {
    let [categorias, setCategorias] = useState([])
    let [nome, setNome] = useState("")
    let [id_categoria, setId_categoria] = useState("")


    useEffect(() => {
        document.title = "Cadastro de Parafusos"
        pegarCategorias()
    }, [])

    async function pegarCategorias() {
        const resposta = await fetch("/categoria/")

        const dados = await resposta.json()
        setCategorias(dados)
    }

    async function cadastrarParafuso(event) {
        
        event.preventDefault()
        const parafusoData = {
            nome,
            id_categoria
        }

        try {
            const resposta = await fetch("/parafuso",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body: JSON.stringify(parafusoData)    
            })

            if(!resposta.ok){
                alert("Erro ao criar parafuso")
                console.debug(resposta)
            }else{
                console.debug("Parafuso Cadastrado")
                alert("Parafuso Cadastrado")
                window.location.href = '/telaPrincipal'
            }
        } catch (error) {
            console.debug(error)
        }
    }
    return (
        <div>
            <a href="/telaPrincipal">Voltar</a>
            <form onSubmit={cadastrarParafuso}>
                <input
                    placeholder='Nome'
                    type="text"
                    value={nome}
                    onChange={e => setNome(e.target.value)}
                />
                <select
                    name=""
                    id=""
                    value={id_categoria}
                    onChange={e => setId_categoria(e.target.value)}
                >
                    {categorias.map(categoria => (
                        <option key={categoria.id_categoria} value={categoria.id_categoria}>{categoria.nome}</option>
                    ))}
                </select>
                <button type='submit'>Cadastrar</button>
            </form>
        </div>
    )
}

export default CadastroParafuso