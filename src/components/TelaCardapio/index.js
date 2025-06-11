// src\components\ListaDePratos\index.js

import { useState, useEffect } from "react";
import axios from "axios";
import './styles.css';

function ListaDePratos() {
    // 1. Estado para armazenar os pratos
    const [pratos, setPratos] = useState([]);

    useEffect(() => {
        const carregarPratos = async () => {
            try {
                
                const response = await axios.get('https://back-end-x2hk.onrender.com/pratos');
                setPratos(response.data);
            } catch (error) {
                
                console.error('Erro ao buscar pratos:', error);
                alert('Erro ao buscar pratos. Verifique o console para mais detalhes.');
                setPratos([]);
            }
        };
        carregarPratos();
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
        <>
        <h1>Cardápio</h1>

        <br />
        <ul id="listaPratos" className="lista-pratos">
            {pratos.length === 0 ? (
                <li>Nenhum prato encontrado.</li>
            ) : (
                pratos.map(prato => (
                    <li key={prato.id}>
                        <strong>Nome do Prato: </strong> {prato.nomePrato}<br />
                        <strong>Descrição: </strong> {prato.descricao}<br />
                        <strong>Preço: </strong> {prato.preco}<br />
                        <strong>Categoria: </strong> {categoriaTexto[prato.categoria] || prato.categoria}<br />
                        <strong>Disponibilidade: </strong> {disponibilidadeTexto[prato.disponibilidade] || prato.disponibilidade}<br />

                        {prato.urlImagem && (
                            <>
                                <strong>Imagem: </strong><br />
                                <img
                                    src={prato.urlImagem}
                                    alt={`Imagem de ${prato.nomePrato}`}
                                    style={{ maxWidth: '200px', borderRadius: '8px', marginTop: '8px' }}
                                    />
                            </>
                        )}
                    </li>
                ))
            )}
        </ul>
    </>
    );
}

export default ListaDePratos;