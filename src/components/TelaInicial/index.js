// src\components\TelaInicial\index.js

import './styles.css';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/images/Louie_spinning_with_happiness.webp';


function TelaInicial() {
    const navigate = useNavigate();
    
    const irParaCadastro = () => {
        navigate('/cadastro');
    }
    const irParaCardapio = () => {
        navigate('/cardapio');
    }
    
    return (
        <div className="tela-inicial">
        <img src={logo} alt="Logo Papa's Popina" className="logo" />

        <h1>Bem-vindo ao</h1>
        <h1>Papa's</h1>
        <br></br>

        <button onClick={irParaCadastro}>Cadastrar pratos</button>
        <br></br>
        <button onClick={irParaCardapio}>Cardápio</button>
        
        </div>
    );

}

export default TelaInicial;