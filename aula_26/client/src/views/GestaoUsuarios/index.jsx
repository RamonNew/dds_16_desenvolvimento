import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {jwtDecode} from 'jwt-decode'

function GestaoUsuarios() {
    // Estado para armazenar usuários
    const [usuarios, setUsuarios] = useState([])
    
    const [nome, setNome] = useState('')
    const navigate = useNavigate()
    useEffect(() => {
        const token = localStorage.getItem("token")
        document.title = "Página de gerenciamento"
        if (!token) {
            navigate("/logar")
            alert("Efetue login")

        } else {
            const decodedToken = jwtDecode(token)
            const usuario_id = decodedToken.usuario_id
            carregarUsuarios(token)
            carregarNomeUsuario(usuario_id)
        }
    }, [])

    async function carregarNomeUsuario(usuario_id,token){
        try {
            const resposta = await fetch("/usuarios/"+usuario_id,{
                headers: {
                    'x-access-token': token
                }
            })

            const dados = await resposta.json()
            setNome(dados.nome)
        } catch (error) {
            
        }
    }

    // Função para carregar usuários
    async function carregarUsuarios(token) {
        try {
            // Faz a chamada para a API através do proxy
            const resposta = await fetch('/usuarios', {
                headers: {
                    'x-access-token': token
                }
            })

            if (resposta.status === 401) {
                localStorage.removeItem('token')
                alert("Usuário não autenticado")
                navigate("/logar")
            }
            if (!resposta) {
                throw new Error("Erro requisição:" + resposta.status)
            } else { // Não é necessário o else
                const dados = await resposta.json()
                setUsuarios(dados)
            }
        } catch (error) {
            console.error("Errro ao buscar os usuaários", error)
        }
    }

    // Função de deletar um usuário
    async function deletarUsuario(usuario_id) {
        if (window.confirm("Tem certeza que deseja deletar esse usuário?")) {
            try {
                const resposta = await fetch('/usuarios/' + usuario_id, {
                    method: 'DELETE',
                })
                if (!resposta.ok) {
                    throw new Error("Falha ao deletar usuário")
                } else {//else não obrigatório
                    carregarUsuarios()
                }

            } catch (error) {
                console.error("Erro ao deletar usuários:", error)
            }
        }
    }
    return (
        <div className='container'>
            <h1>Bem vindo {nome}</h1>
            <h1>Gestão de Usuários</h1>
            <table class="table table-striped table-hove">
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Usuário</th>
                    <th>Tipo</th>
                    <th>Ações</th>
                </tr>
                {usuarios.map(usuario => (
                    <tr key={usuario.usuario_id}>
                        <td>{usuario.usuario_id}</td>
                        <td>{usuario.nome}</td>
                        <td>{usuario.usuario}</td>
                        <td>{usuario.usuario_tipo}</td>
                        <td>
                            <button class="btn btn-primary" onClick={() => window.location.href = "/atualizarUsuario/" + usuario.usuario_id}>Editar</button>
                            <button onClick={() => deletarUsuario(usuario.usuario_id)} class="btn btn-danger">Deletar</button>
                        </td>
                    </tr>

                ))}
            </table>
        </div>
    )
}

export default GestaoUsuarios