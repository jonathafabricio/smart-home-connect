import React from 'react';
import Typed from 'react-typed';
import './Solucoes.css';
import autoResidImage from './assets/img/auto-resid.jpg';
import cortPersImage from './assets/img/cortPers.jpg';
import iluminacao from './assets/img/iluminacao.jpg';
import segurIntel from './assets/img/segurIntel.jpg';
import somAmb from './assets/img/somAmb.jpg';
import monClim from './assets/img/monClim.jpg';
import irrigIntel from './assets/img/irrigIntel.jpg';
import autEletr from './assets/img/autEletr.jpg';
import configPers from './assets/img/configPers.jpg';

const Solucoes = () => {
    const phrases = [
        'Sua Casa',
        'Seu Aconchego',
        'Seu Lar',
        'Seu Escritório',
        'Seu Quarto',
    ];

    return (
        <div className="solutions-section">
            <h2>Comande <Typed
                strings={phrases}
                typeSpeed={120}
                backSpeed={120}
                backDelay={2000}
                loop
                className="typed-text"
            /> com Toque ou Voz</h2>
            <p className="solutions-section-details">Em qualquer lugar a Smart Home vai te ajudar.</p>

            <div className="solutions-container">

                <div className="solution card">
                    <div className="card-inner">
                        <div className="front" style={{ backgroundImage: `url(${autoResidImage})` }}>
                            <h3>Automação Residencial</h3>
                        </div>
                        <div className="back">
                            <p>
                                Transforme sua casa em um ambiente inteligente e conectado.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="solution card">
                    <div className="card-inner">
                        <div className="front"style={{ backgroundImage: `url(${iluminacao})` }}>
                            <h3>Controle de Iluminação</h3>
                        </div>
                        <div className="back">
                            <p>
                                Crie cenários de iluminação personalizados para cada atividade.
                                <br /><br />
                                Vai fazer aquele jantar romântico? Deixe a luz mais agradável.
                                <br /><br />
                                Quer assistir a um filme? Ajuste a iluminação para uma melhor experiência.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="solution card">
                    <div className="card-inner">
                        <div className="front" style={{ backgroundImage: `url(${cortPersImage})` }}>
                            <h3>Automação de Cortinas e Persianas</h3>
                        </div>
                        <div className="back">
                            <p>
                                Automatize cortinas para conforto e eficiência energética.
                                <br /><br />
                                Ajuste a quantidade de luz natural em cada ambiente.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="solution card">
                    <div className="card-inner">
                        <div className="front" style={{ backgroundImage: `url(${segurIntel})` }}>
                            <h3>Segurança Inteligente</h3>
                        </div>
                        <div className="back">
                            <p>
                                Sistemas de segurança avançados para proteger sua casa ou empresa.
                                <br /><br />
                                Monitore e receba alertas em tempo real.
                                <br /><br />
                                Acompanhe cada movimento com precisão.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="solution card">
                    <div className="card-inner">
                        <div className="front" style={{ backgroundImage: `url(${somAmb})` }}>
                            <h3>Sistema de Som Ambiente</h3>
                        </div>
                        <div className="back">
                            <p>
                                Crie uma experiência sonora imersiva em sua casa.
                                <br /><br />
                                Controle a música em cada cômodo.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="solution card">
                    <div className="card-inner">
                        <div className="front" style={{ backgroundImage: `url(${monClim})` }}>
                            <h3>Monitoramento Climático</h3>
                        </div>
                        <div className="back">
                            <p>
                                Automatize o aquecimento e refrigeração para conforto constante.
                                <br /><br />
                                Mantenha a temperatura ideal em todas as estações.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="solution card">
                    <div className="card-inner">
                        <div className="front" style={{ backgroundImage: `url(${irrigIntel})` }}>
                            <h3>Sistemas de Irrigação Inteligente</h3>
                        </div>
                        <div className="back">
                            <p>
                                Controle a irrigação do jardim com eficiência e inteligência.
                                <br /><br />
                                Economize água e mantenha seu jardim sempre verde.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="solution card">
                    <div className="card-inner">
                        <div className="front" style={{ backgroundImage: `url(${autEletr})` }}>
                            <h3>Automação de Eletrodomésticos</h3>
                        </div>
                        <div className="back">
                            <p>
                                Integre eletrodomésticos para controle e monitoramento remotos.
                                <br /><br />
                                Economize energia e simplifique suas tarefas diárias.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="solution card">
                    <div className="card-inner">
                        <div className="front" style={{ backgroundImage: `url(${configPers})` }}>
                            <h3>Configurações Personalizadas para Entretenimento</h3>
                        </div>
                        <div className="back">
                            <p>
                                Crie ambientes perfeitos para filmes e jogos.
                                <br /><br />
                                Personalize sua experiência de entretenimento.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Solucoes;
