import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import Home from './views/Home/Home'
import About from './views/About/About';
import Navbar from './components/Navbar';
import AddUsuario from './views/AdicionarUsuarios/index'
import GestaoUsuarios from './views/GestaoUsuarios';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/senai' element={<Home />} />
        <Route path='/sobrenos' element={<About />} />
        <Route path='/adicionarUsuario' element={<AddUsuario />} />
        <Route path='/gestaoUsuario' element={<GestaoUsuarios />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
