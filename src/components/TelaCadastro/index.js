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
    const [previewImagem, setPreviewImagem] = useState(null)
    const { mensagem, tipoMensagem, visivel, exibirMensagem, fecharMensagem } = useMensagem()
    const navigate = useNavigate()


    const irParaInicio = () => {
        navigate('/');
    }
    const irParaCardapio = () => {
        navigate('/cardapio');
    }

    async function cadastrar(e) { 
                e.preventDefault()
        if (parseFloat(preco) <= 0) {
            exibirMensagem('Por favor, insira um preço válido maior que zero.', 'erro'); 
            return;
        }

        try {
            const response = await axios.post('https://atividade-avaliativa-iii-front-end.onrender.com/pratos', { nomePrato, descricao, preco, categoria, disponibilidade, urlImagem })
            exibirMensagem(response.data.mensagem || 'Prato cadastrado com sucesso', 'sucesso')
            setNomePrato('')
            setDescricao('')
            setPreco('')
            setCategoria('')
            setDisponibilidade('')
            setUrlImagem('')
            setPreviewImagem(null)

        } catch (erro){
            let erroMsg = 'Erro ao conectar ao servidor'
            if (erro.response && erro.response.data) {
                erroMsg = erro.response.data.mensagem
                if (erro.response.data.erros) {
                    erroMsg += ' ' + Object.values(erro.response.data.erros).join(', ')
                }
            }
            exibirMensagem(erroMsg, 'erro')
        }
    }

    return (
        <div className="tela-cadastro">
            <form onSubmit={cadastrar}>
                <img src={carrinho} alt="Logo Papa's Popina" className="logo" />
                <h1>Cadastro de pratos</h1>

                <input type="text" placeholder="Nome do prato" value={nomePrato} onChange={(e) => setNomePrato(e.target.value)} required />
                <input type="text" placeholder="Descrição" value={descricao} onChange={(e) => setDescricao(e.target.value)} required /> {/* type="descricao" não existe, use "text" ou "textarea" */}
                <input type="number" placeholder="Preço" value={preco} onChange={(e) => setPreco(e.target.value)} required /> {/* Use type="number" para preço */}
                <select placeholder="Categoria" value={categoria} onChange={(e) => setCategoria(e.target.value)} required>
                    <option value="" disabled>Selecione a categoria</option>
                    <option value="ENTRADA">Entrada</option>
                    <option value="PRATO_PRINCIPAL">Prato Principal</option>
                    <option value="SOBREMESA">Sobremesa</option>
                    <option value="BEBIDA">Bebida</option>
                </select>
                <br></br>
                <select placeholder="Disponibilidade" value={disponibilidade} onChange={(e) => setDisponibilidade(e.target.value)} required>
                    <option value="" disabled>Selecione a disponibilidade</option>
                    <option value="ESGOTADO">Esgotado</option>
                    <option value="EM_ESTOQUE">Em estoque</option>
                </select>

                <input
                    type="url"
                    id="urlImagem"
                    value={urlImagem}
                    placeholder="https://exemplo.com/imagem.jpg"
                    onChange={(e) => {setUrlImagem(e.target.value)
                        setPreviewImagem(e.target.value)
                    }}
                    required pattern="https?://.*\.(?:png|jpg|jpeg|gif|svg)"
                />
                <div style={{ margin: "10px 0", textAlign: "center"}}>
                </div>

                {previewImagem && (
                    <img
                        src={previewImagem}
                        alt="Pré-visualização"
                        style={{ maxWidth: '100%', marginTop: '10px', borderRadius: '8px'}}
                    />
                )}

                <button type="submit">Cadastrar prato</button>
                <br></br>
                <button type="button" onClick={irParaCardapio}>Cardápio</button>
                <br></br>
                <button type="button" onClick={irParaInicio}>Início</button>

            </form>
            <MensagemFeedback mensagem={mensagem} tipo={tipoMensagem} visivel={visivel} onClose={fecharMensagem}/>
        </div>
    )
}
export default TelaCadastro