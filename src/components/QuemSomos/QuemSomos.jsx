import React from 'react';
import './QuemSomos.css';

const QuemSomos = () => {
  return (
    <div className="quem-somos" id='quem-somos'>
      <div className="intro">
        <h2>Quem Somos</h2>
        <p>
          Somos a Smart Home Connect, uma empresa dedicada a transformar casas em lares inteligentes.
          Nossa paixão pela tecnologia e inovação nos impulsiona a oferecer soluções que tornam a vida diária mais conveniente e eficiente.
        </p>
      </div>

      <div className="missao-visao-valores">
        <div className="missao">
          <h3>Missão</h3>
          <p>Nossa missão é proporcionar soluções inovadoras de automação residencial, proporcionando conforto, segurança e eficiência aos nossos clientes.</p>
        </div>

        <div className="visao">
          <h3>Visão</h3>
          <p>Ser reconhecidos como líderes no setor de automação residencial, oferecendo tecnologia de ponta e experiências excepcionais aos usuários.</p>
        </div>

        <div className="valores">
          <h3>Valores</h3>
          <ul>
            <li>Inovação</li>
            <li>Integridade</li>
            <li>Comprometimento</li>
            <li>Satisfação do Cliente</li>
            <li>Sustentabilidade</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default QuemSomos;
