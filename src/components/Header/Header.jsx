import './Header.css';
import React from 'react';

const Header = () => {
    return (
        <div>
            <div className='header'>
                <div className="textos">
                    <h1>Inovação e Conforto em Cada Canto da Sua Casa</h1>
                    <p>Descubra um mundo de possibilidades com nossa tecnologia de automação residencial. Deixe que a inteligência artificial torne sua vida mais prática, segura e confortável. Navegue e veja como transformar seu lar em um espaço futurista!</p>
                    <a href="https://wa.me/5581992309999" target="_blank" rel="noopener noreferrer">
                        <button className="button">Fale Conosco</button>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Header;
