package com.senai.atividade.model;

public enum Categoria {
    ENTRADA ("Entrada"),
    PRATO_PRINCIPAL ("Prato principal"),
    SOBREMESA ("Sobremesa"),
    BEBIDA ("Bebida");

    private String texto;

    Categoria(String texto) {
        this.texto = texto;
    }

    public String getTexto() {
        return texto;
    }

    public void setTexto(String texto) {
        this.texto = texto;
    }
}
