package com.senai.restaurante.repository;

import com.senai.restaurante.model.Prato;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface PratoRepository extends JpaRepository<Prato, Long> {
    Optional<Prato> findByNomePrato(String nomePrato);
}