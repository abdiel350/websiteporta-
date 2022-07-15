import React from 'react';
import '../../App.css';
import "../../css/Footer.css";
import SobreMi from '../SobreMi';
import Proyectos from '../Proyectos';
import Contact from '../Contact';
import HeroSectiont from '../HeroSectiont';
import Navbart from '../Navbart';
import Habilidades from '../Habilidades';
import Footer from '../Footer';



function Home() {
  return (
    <>    
    <Navbart/>         
    <HeroSectiont/> 
    <SobreMi/>
    <Proyectos />
    <Habilidades/>
    <Contact/>   
    <Footer/>
    </>
  );
}

export default Home;
