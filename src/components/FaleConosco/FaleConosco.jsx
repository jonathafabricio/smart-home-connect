import React from 'react';
import './FaleConosco.css';

const FaleConosco = () => {
    return (
        <div className="fale-conosco-section" id='fale-conosco'>
            <p>Gostaria de saber mais sobre nossas soluções?</p>
            <h2><span>Entre em Contato</span> para Conhecer Nossas Soluções</h2>
            <p>Estamos à disposição para atender suas dúvidas e apresentar as mais avançadas soluções em automação residencial. Nossa equipe especializada está pronta para auxiliar você a encontrar as opções mais adequadas para o seu estilo de vida, otimizando seu conforto, segurança e entretenimento.</p>
            <a href="https://wa.me/5581992309999" target="_blank" rel="noopener noreferrer">
                <button className="button">Fale Conosco</button>
            </a>
        </div>
    );
};

export default FaleConosco;
