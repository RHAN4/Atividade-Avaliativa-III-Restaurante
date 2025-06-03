// src\components\TelaCadastro\index.js

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useMensagem from '../../hooks/useMensagem'
import MensagemFeedback from '../MensagemFeedback'
import axios from 'axios'
import './styles.css'

function TelaCadastro() {
    const [nomePrato, setNomePrato] = useState('')
    const [descricao, setDescricao] = useState('')
    const [preco, setPreco] = useState('')
    const [categoria, setCategoria] = useState('')
    const [disponibilidade, setDisponibilidade] = useState('')
    const [urlImagem, setUrlImagem] = useState('')
    const { mensagem, tipo, visivel, onClose } = useMensagem()
    const navigate = useNavigate()

    async function cadastrar(e) {
        e.preventDefault()
        if (preco !== categoria) {
            onClose('As precos não conferem', 'erro')
            return
        }
        try {
            await axios.post('/usuarios', { nomePrato, descricao, preco })
            onClose('Usuário cadastrado com sucesso', 'sucesso')
            navigate('/')
        } catch (error) {
            onClose('Erro ao cadastrar usuário', 'erro')
        }
    }

    return (
        <div className="tela-cadastro">
            <form onSubmit={cadastrar}>
                <h1>Cadastro de pratos</h1>
                <input type="text" placeholder="NomePrato" value={nomePrato} onChange={(e) => setNomePrato(e.target.value)} required />
                <input type="descricao" placeholder="descricao" value={descricao} onChange={(e) => setDescricao(e.target.value)} required />
                <input type="password" placeholder="preco" value={preco} onChange={(e) => setPreco(e.target.value)} required />
                <input type="password" placeholder="categoria" value={categoria} onChange={(e) => setCategoria(e.target.value)} required />
                <input type="password" placeholder="disponibilidade" value={disponibilidade} onChange={(e) => setDisponibilidade(e.target.value)} required />
                <input type="password" placeholder="url da imagem" value={urlImagem} onChange={(e) => setUrlImagem(e.target.value)} required />
                <button type="submit">Cadastrar prato</button>
            </form>
            <MensagemFeedback mensagem={mensagem} tipo={tipo} visivel={visivel} onclose={() => onClose()} />
        </div>
    )
}
export default TelaCadastro