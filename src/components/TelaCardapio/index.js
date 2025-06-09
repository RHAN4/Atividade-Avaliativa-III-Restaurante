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

    const categoriaTexto = {
        ENTRADA: 'Entrada',
        PRATO_PRINCIPAL: 'Prato Principal',
        SOBREMESA: 'Sobremesa',
        BEBIDA: 'Bebida'
    }

    const disponibilidadeTexto = {
        EM_ESTOQUE: 'Em Estoque',
        ESGOTADO: 'Esgotado'
    }

    return (
        <div className="tela-cardapio">
            <h1 className='title'>Cardápio</h1>
            {error && <p className="error">{error}</p>}
            
            
            <div className="cardapio-container">   

            <ul id="lista-cardapio" className="lista-cardapio">
            {cardapio.length === 0 ? (
                <li>Cardápio vazio!</li>
            ) : (
                cardapio.map(prato => (
                    <li key={prato.id}>
                        <strong>Nome do prato: </strong> {prato.nomePrato}<br />
                        <strong>Descrição: </strong> {prato.descricao}<br />
                        <strong>Preço: </strong> {prato.preco}<br />
                        <strong>Categoria: </strong> {categoriaTexto[prato.categoria] || prato.categoria}<br />
                        <strong>Disponibilidade: </strong> {disponibilidadeTexto[prato.disponibilidade] || prato.disponibilidade}<br />
                        <strong>Imagem: </strong> {prato.urlImagem}<br />
                    </li>
                ))
            )}
        </ul>
            
            <button onClick={irParaCadastro}>Cadastrar prato</button>
            <br />
            <button onClick={irParainicio}>Pagina inicial</button>

            </div>
        </div>
    );
}

export default TelaCardapio;