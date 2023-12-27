import './Navbar.css'
import React, { useState, useEffect } from 'react'
import logo from '../../assets/img/logo-smarthome-horizontal.png'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${menuOpen ? 'open' : ''}`}>
      <div className="navbar-content">
        <div className="logo">
          <img src={logo} alt="Smart Home Connect Logo" />
        </div>
        <div className={`menu-toggle ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          <li><a href="#quem-somos">Quem Somos</a></li>
          <li><a href="#perguntas-frequentes">Perguntas Frequentes</a></li>
          <li><a href="#fale-conosco">Fale Conosco</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
