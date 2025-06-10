// src\pages\Cardapio\index.js

import Cardapio from '../../components/TelaCardapio';
import './styles.css';
import { useNavigate } from 'react-router-dom';
// import logo from '../../assets/images/logo.png';

function PaginaCardapio() {
    const navigate = useNavigate();
    const irParainicio = () => {
        navigate('/');
    }
    const irParaCadastro = () => {
        navigate('/cadastro');
    }

    return (
        <div className="container-cardapio">
            <Cardapio />

        <button onClick={irParaCadastro}>Cadastrar prato</button>
        <br />
        <button onClick={irParainicio}>Pagina inícial</button>
        </div>
    );
}

export default PaginaCardapio;