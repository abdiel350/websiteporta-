import React, { useEffect } from 'react';

const Navbar = () => {

    useEffect( () => {
        document.addEventListener('scroll', handleScroll );
    });

    const handleScroll = () => {
        const header = document.querySelector('.header.container');
        var scroll_position = window.scrollY;

        if( scroll_position > 80 ) {
            header.style.backgroundColor = "#29323C";
        }

        else {
            header.style.backgroundColor = "transparent";
        }
    }

    const hideMenu = () => {
        const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
        const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
        hamburger.classList.toggle('active');
        mobile_menu.classList.toggle('active');
    }

    return (
        <section id="header">
            <div className="header container">
                <div className="nav-bar">
                    <div className="brand">
                        <a href="#Inicio">  <h1> <span>A</span>bdiel <span>C</span>ontreras </h1>  </a>
                    </div>
                    <div className="nav-list">
                        <div className="hamburger" onClick={hideMenu}> <div className="bar"></div> </div>
                        <ul>
                            <li> <a href="#Inicio" data-after="Inicio" onClick={hideMenu}> Inicio </a> </li>

                            <li> <a href="#sobremi" data-after="About" onClick={hideMenu}> Sobre Mí </a> </li>

                            <li> <a href="#proyectos" data-after="proyectos" onClick={hideMenu}> Proyectos </a> </li>

                            <li> <a href="#habilidades" data-after="Skills" onClick={hideMenu}> Habilidades </a> </li>

                            <li> <a href="#contact" data-after="Contact" onClick={hideMenu}> Contacto </a> </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Navbar;
