import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <header>
        <div className="container-header">
            <nav>
                <a href='#home' className='logo'>
                    <div className="logo">
                        <img src="./logoWhite.png" alt="logotipo langdom" />
                    </div>
                </a>
                <ul className="nav-list">
                    <li><a href="#courses">Cursos</a></li>
                    <li><a href="#modalities">Modalidades</a></li>
                    <li><a href="#about-us">Sobre Nós</a></li>
                    <li><a href="#contact-us">Contato</a></li>
                    <li id="link-nav-button"><a href="https://aulademo" className="nav-button-link">
                        <button id='nav-button'>Conheça na prática</button></a></li>
                </ul>

                <div className="mobile-menu">
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>
            </nav>
        </div>
    </header>

    
  )
}

export default Navbar