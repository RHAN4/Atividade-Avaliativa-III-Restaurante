package com.senai.restaurante.model;

public enum Disponibilidade {
    EM_ESTOQUE ("Em estoque"),
    ESGOTADO ("Esgotado");

    private String texto;

    Disponibilidade(String texto) {
        this.texto = texto;
    }

    public String getTexto() {
        return texto;
    }

    public void setTexto(String texto) {
        this.texto = texto;
    }
}