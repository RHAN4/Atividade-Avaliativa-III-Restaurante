import {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './styles.css';

function TelaCardapio() {
    const navigate = useNavigate();
    const [cardapio, setCardapio] = useState([]);
    const [error, setError] = useState(null);
    
    const irParainicio = () => {
        navigate('/');
    }
    const irParaCadastro = () => {
        navigate('/cadastro');
    }

    useEffect(() => {
        async function fetchCardapio() {
        try {
            const response = await axios.get('https://localhost:8080/cardapio');
            setCardapio(response.data);
        } catch (err) {
            setError('Erro ao carregar o cardápio');
        }
    }
    fetchCardapio();
    }, []);

    return (
        <div className="tela-cardapio">
        <h1>Cardápio</h1>
        {error && <p className="error">{error}</p>}
        <ul>
            {cardapio.map(item => (
            <li key={item.id}>
                <h2>{item.nome}</h2>
                <p>{item.descricao}</p>
                <span>R$ {item.preco.toFixed(2)}</span>
            </li>
            ))}
        </ul>

        <button onClick={irParaCadastro}>Cadastrar</button>
        <button onClick={irParainicio}>Pagina inicial</button>
        </div>
    );
}

export default TelaCardapio;