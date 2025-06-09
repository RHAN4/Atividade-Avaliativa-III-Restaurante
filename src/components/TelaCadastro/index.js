// src\components\TelaCadastro\index.js

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useMensagem from '../../hooks/useMensagem'
import MensagemFeedback from '../MensagemFeedback'
import axios from 'axios'
import './styles.css'
import carrinho from '../../assets/images/papaCarrinho.webp'

function TelaCadastro() {
    const [nomePrato, setNomePrato] = useState('')
    const [descricao, setDescricao] = useState('')
    const [preco, setPreco] = useState('')
    const [categoria, setCategoria] = useState('')
    const [disponibilidade, setDisponibilidade] = useState('')
    const [urlImagem, setUrlImagem] = useState('')
    const { mensagem, tipo, visivel, onClose } = useMensagem()
    const navigate = useNavigate()

    const irParaInicio = () => {
        navigate('/');
    }
    const irParaCardapio = () => {
        navigate('/cardapio');
    }

    async function cadastrar(e) {
        e.preventDefault()
        if (preco !== categoria) {
            onClose('Os preços não conferem', 'erro')
            return
        }
        try {
            await axios.post('/usuarios', { nomePrato, descricao, preco, categoria, disponibilidade, urlImagem })
            onClose('Prato cadastrado com sucesso', 'sucesso')
            navigate('/')
        } catch (error) {
            onClose('Erro ao cadastrar prato', 'erro')
        }
    }

    return (
        <div className="tela-cadastro">
            <form onSubmit={cadastrar}>
                <img src={carrinho} alt="Logo Papa's Popina" className="logo" />
                <h1>Cadastro de pratos</h1>
                
                <input type="text" placeholder="Nome do prato" value={nomePrato} onChange={(e) => setNomePrato(e.target.value)} required />
                <input type="descricao" placeholder="Descrição" value={descricao} onChange={(e) => setDescricao(e.target.value)} required />
                <input type="text" placeholder="Preço" value={preco} onChange={(e) => setPreco(e.target.value)} required />
                <select type="text" placeholder="Categoria" value={categoria} onChange={(e) => setCategoria(e.target.value)} required>
                    <option value="ENTRADA">Entrada</option>
                    <option value="PRATO_PRINCIPAL">Prato Principal</option>
                    <option value="SOBREMESA">Sobremesa</option>
                    <option value="BEBIDA">Bebida</option>
                </select> 
                <br></br>
                <select type="text" placeholder="Disponibilidade" value={disponibilidade} onChange={(e) => setDisponibilidade(e.target.value)} required>
                    <option value="ESGOTADO">Esgotado</option>
                    <option value="EM_ESTOQUE">Em estoque</option>
                </select>
                
                <input type="text" placeholder="Url da imagem" value={urlImagem} onChange={(e) => setUrlImagem(e.target.value)} required />
                
                <button type="submit">Cadastrar prato</button>
                <br></br>
                <button type="submit" onClick={irParaCardapio}>Cardápio</button>
                <br></br>
                <button type="submit" onClick={irParaInicio}>Inicio</button>

            </form>
            <MensagemFeedback mensagem={mensagem} tipo={tipo} visivel={visivel} onclose={() => onClose()} />
        </div>
    )
}
export default TelaCadastro