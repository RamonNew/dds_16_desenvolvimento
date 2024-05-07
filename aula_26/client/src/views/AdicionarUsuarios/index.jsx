import { useState } from 'react'

function AddUsuario() {
    //Definindo os estados para cada campo do formulário
    const [nome, setNome] = useState('')
    const [usuario, setUsuario] = useState('')
    const [senha, setSenha] = useState('')
    const [usuario_tipo, setUsuarioTipo] = useState('')

    //Função que será chamada ao enviar o formulário
    async function cadastrarUsuario(event) {
        //Impede o comportamento de recarregar a página
        event.preventDefault()
        //Criando objeto com os dados do usuário a serem enviados para a API
        const usuarioData = {
            nome,
            usuario,
            senha,
            usuario_tipo
        }

        try {
            //Realiza POST para a API
            const resposta = await fetch('/usuarios', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json' //Especificando o corpo como JSON
                },
                body: JSON.stringify(usuarioData)
            })

            //Verifica se a resposta da API foi bem-sucedida
            if (!resposta.ok) {
                console.debug("Erro ao criar usuário")
            } else {
                alert('Usuário Cadastrado')
                console.debug("Usuário Inserido")
                window.location.href = '/'
            }

        } catch (error) {
            console.debug(error)
        }
    }

    return (
        <div className='container'>
            <h1>Adicionar Usuário</h1>
            <form onSubmit={cadastrarUsuario}>
                <label>Nome:</label>
                <input type="text" value={nome} onChange={e => setNome(e.target.value)} />
                <label>Usuário:</label>
                <input type="text" value={usuario} onChange={e => setUsuario(e.target.value)} />
                <label>Senha:</label>
                <input type="password" value={senha} onChange={e => setSenha(e.target.value)} />
                <label>Tipo Usuário</label>
                <select value={usuario_tipo} onChange={e => setUsuarioTipo(e.target.value)}>
                    <option value="">Selecione</option>
                    <option value="A">Admin</option>
                    <option value="U">Usuário</option>
                </select>
                <button type='submit'>Criar Usuário</button>
            </form>
        </div>
    )
}

export default AddUsuario