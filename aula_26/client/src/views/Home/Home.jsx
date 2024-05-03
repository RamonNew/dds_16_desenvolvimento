import { useEffect, useState } from 'react';

function Home() {
  // Estado para armazenar os usuários
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    document.title = "Página Inicial";

    // Função para carregar os usuários
    async function carregarUsuarios() {
      try {
        // Faz a chamada para a API através do proxy
        const resposta = await fetch('/usuarios');
        if (!resposta.ok) {
          throw new Error(`HTTP error! status: ${resposta.status}`);
        }
        const dados = await resposta.json();
        console.debug(dados)
        setUsuarios(dados);
      } catch (erro) {
        console.error('Erro ao buscar os usuários:', erro);
      }
    }

    // Chama a função para carregar os usuários
    carregarUsuarios();
  }, []);

  return (
    <div className='container'>
      <h1>Bem-vindo à Página Inicial</h1>
      <h2>Usuários</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Usuário</th>
            <th>Senha</th>
            <th>Tipo</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map(usuario => (
            <tr key={usuario.usuario_id}>
              <td>{usuario.usuario_id}</td>
              <td>{usuario.nome}</td>
              <td>{usuario.usuario}</td>
              <td>{usuario.senha}</td>
              <td>{usuario.usuario_tipo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Home;