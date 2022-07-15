import React from 'react';
import HabilidadesItem from  './HabilidadesItem';

const Habilidades = () => {

    const imagenes = [
        { image: "/img/conocimiento/c.png" },
        { image: "/img/conocimiento/cpp.png" },
        { image: "/img/conocimiento/html.png" },
        { image: "/img/conocimiento/css.png" },
        { image: "/img/conocimiento/js.png" },
        { image: "/img/conocimiento/java.png" },
        { image: "/img/conocimiento/jquery.png" },       
        { image: "/img/conocimiento/php.png" },       
        { image: "/img/conocimiento/firebase.png" },
        { image: "/img/conocimiento/react.png" },        
        { image: "/img/conocimiento/express.png" },
        { image: "/img/conocimiento/node.png" },
        { image: "/img/conocimiento/mysql.png" },      
        { image: "/img/conocimiento/mongodb.png" },
        { image: "/img/conocimiento/bootstrap.png" },
        { image: "/img/conocimiento/postgresql.png" },
        { image: "/img/conocimiento/redux.jpg" },
        { image: "/img/conocimiento/laravel.png" },
        { image: "/img/conocimiento/NextJS.png" },
        { image: "/img/conocimiento/graphql.png" },
        { image: "/img/conocimiento/Ajax.png" },
        { image: "/img/conocimiento/joomla.png" },
        { image: "/img/conocimiento/excel.png" },
        { image: "/img/conocimiento/word.png" },
        { image: "/img/conocimiento/powerpoint.png" },      
        { image: "/img/conocimiento/github.png" }
    ]

    return (
        <section id="habilidades">
            <div className="skills container">
                <div className="projets-header">
                    <h1 className="section-title"> Mis <span> Habilidades </span> </h1>
                </div>
                <div className="all-skills">
                    {imagenes.map( (img, index) =>
                     <HabilidadesItem
                      key={index}
                      img={img}
                     /> )}
                </div>
            </div>
        </section>
    )
}

export default Habilidades;