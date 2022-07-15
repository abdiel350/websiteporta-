import React from 'react';
import '../css/Cards.css';
import CardItem from './CardItem';




function Proyectos() {
  return (
    <section id="proyectos">
    <div className='cards'>

      <div className='cards__container'>
        <div className='cards__wrapper'>

        <h1 className="section-title"> ALGUNOS DE MIS<span> PROYECTOS...!</span> </h1>
         {/*  <h1 className="section-title"> mis <span> ALGUNOS DE MIS PROYECTOS...!</span> </h1> */}
     
          <ul className='cards__items'>
          
            <CardItem
              src='img/peliculas.jpg'
              text='Es un sitio web que muestra las peliculas mas populares y los ultimos lanzamientos,usando la API: www.themoviedb.org'
              Tecnologias=' Usadas: HTML5,CSS3,JS,React,Node-sass,ant-design entre otras librerias'
              pagina="https://webdepeliculas.netlify.app/"
            />
          
            <CardItem
              src='img/img-4.jpg'
              text='Sitio web que muestra informacion referente a un hotel, con habitaciones sencilla, doble y premiun...'
              Tecnologias='Tecnologias Usadas: HTML5,CSS3,JS,React,styled-components,GraphQL'
              pagina="https://hotelparadaise.netlify.app/"
            />
            <CardItem
              src='img/ecomerce.jpg'
              text='Proyecto ecommerce sencillo,Es una plataforma que muestra una cierta cantidad de productos y los agrega al carrito de compra...'
              Tecnologias='Tecnologias Usadas: HTML5,CSS3,JS,React,Node-sass,React-Toastify, entre otros'
              pagina="https://ecomerceproductos.netlify.app/"
            />
          </ul>   
  
          
      <a
        target="_blank" 
        rel="noopener noreferrer"
         href="https://algunosdemisproyectos.netlify.app/"
         className="letraslinka"
         >
       Ver Todos
      </a>


        </div>        
      </div>
    </div>
    
    </section>
  );
}

export default Proyectos;
