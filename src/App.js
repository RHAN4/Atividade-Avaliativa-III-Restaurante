// src\App.js

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import PaginaCadastro from './pages/Cadastro';
import PaginaCardapio from './pages/Cardapio';
import './App.css';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/cadastro' element={<PaginaCadastro />} />
        <Route path='/cardapio' element={<PaginaCardapio/>} />
      </Routes>
    </Router>

  );
}

export default App;
