import { useEffect, useState } from 'react'

function Logar() {
  const [login, setLogin] = useState("")
  const [senha, setSenha] = useState("")

  useEffect(() => {
    document.title = "Tela Login"
  }, [])

  async function efetuarLogin() {
    try {
      const resposta = await fetch("/logar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ login, senha })
      })
      if (!resposta.ok) {
        alert("Usuário ou Senha Invalidos!!!")
        throw new Error("Erro na requisição" + resposta.status)
      } else {
        const dados = await resposta.json()
        localStorage.setItem("id_usuario", dados.id_usuario)
        window.location.href = "/telaPrincipal"
      }

    } catch (error) {
      console.error("Erro ao fazer login", error)
    }

  }
  return (
    <div className='container col-md-3 pt-5 justify-content-center'>
      <h1 className='text-center'>Bem vindo</h1>
      <input
        className='form-control'
        type="text"
        placeholder='Login'
        value={login}
        onChange={(e) => setLogin(e.target.value)}
      />
      <input
        className='form-control'
        type="password"
        placeholder='Senha'
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
      />
      <button
        className='mt-2 btn btn-primary float-end'
        onClick={efetuarLogin}>Logar</button>
    </div>
  )
}

export default Logar