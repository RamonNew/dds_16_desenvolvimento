import {useEffect} from 'react';

function Home() {
  useEffect(() => {
    document.title = "Página Inicial";
  }, []);

  return (
    <div className='container'>
      <h1>Bem-vindo à Página Inicial</h1>
    </div>
  );
}

export default Home;