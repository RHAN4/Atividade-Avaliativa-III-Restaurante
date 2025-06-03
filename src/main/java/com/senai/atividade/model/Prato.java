package com.senai.atividade.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

@Entity
public class Prato {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "Nome do prato é obrigatório.")
    private String nomePrato;

    @NotBlank(message = "Descrição é obrigatória.")
    private String descricao;

    @NotNull(message = "Preço é obrigatório.")
    private Double preco;

    @Enumerated(EnumType.STRING)
    private Categoria categoria;

    @Enumerated(EnumType.STRING)
    private Disponibilidade disponibilidade;

    @NotBlank(message = "URL é obrigatória.")
    private String urlImagem;

    public Prato() {
    }

    public Prato(Long id, String nomePrato, String descricao, Double preco, Categoria categoria, Disponibilidade disponibilidade, String urlImagem) {
        this.id = id;
        this.nomePrato = nomePrato;
        this.descricao = descricao;
        this.preco = preco;
        this.categoria = categoria;
        this.disponibilidade = disponibilidade;
        this.urlImagem = urlImagem;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNomePrato() {
        return nomePrato;
    }

    public void setNomePrato(String nomePrato) {
        this.nomePrato = nomePrato;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public Double getPreco() {
        return preco;
    }

    public void setPreco(Double preco) {
        this.preco = preco;
    }

    public Categoria getCategoria() {
        return categoria;
    }

    public void setCategoria(Categoria categoria) {
        this.categoria = categoria;
    }

    public Disponibilidade getDisponibilidade() {
        return disponibilidade;
    }

    public void setDisponibilidade(Disponibilidade disponibilidade) {
        this.disponibilidade = disponibilidade;
    }

    public String getUrlImagem() {
        return urlImagem;
    }

    public void setUrlImagem(String urlImagem) {
        this.urlImagem = urlImagem;
    }

    @Transient
    public String getCategoriaTexto() {
        return categoria != null ? categoria.getTexto() : "";
    }

    @Transient
    public String getDisponibilidadeTexto() {
        return disponibilidade !=null ? disponibilidade.getTexto() : "";
    }
    @Override
    public String toString() {
        return "Prato: " +
                "ID: " + id +
                ", nome do prato: '" + nomePrato + '\'' +
                ", descrição: '" + descricao + '\'' +
                ", preço: " + preco +
                ", categoria: " + (categoria != null ? categoria.getTexto() : "N/A") +
                ", disponibilidade: " + (disponibilidade != null ? disponibilidade.getTexto() : "N/A") +
                ", url da imagem: '" + urlImagem;
    }
}
