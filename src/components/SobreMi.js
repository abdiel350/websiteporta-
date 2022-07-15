import React from 'react';

const SobreMi = () => {
    return (
        <section id="sobremi">
            <div className="about container">
                <div className="col-left">
                    <img  className='imgRedonda' src="/img/indice.png" alt="img" />
                </div>

                <div className="col-right">
                    <h1 className="section-title"> Sobre <span>mí</span> </h1>
                    <h2>  Front-End Developer  </h2>
                    <p>
                        Hola, mi nombre es Abdiel Contreras.
                        <br /> <br /> La tecnología me apasiona y como desarrollador de software siempre estoy dispuesto aprender nuevas tecnologías y dominar cualquier lenguaje de programación en poco tiempo, lo cual añade calidad y eficiencia a los proyectos que desarrollo,  A lo largo de mi carrera profesional y laboral he podido aprender muchas cosas, también he podido automatizar mi trabajo  para aprovechar las nuevas tecnologías y dar así mejores soluciones.
                        <br /> <br />  Nunca digo No a cualquier proyecto que se me presente, siempre me digo a Mí mismo todo es posible, No hay imposibles en este mundo de la programación, para todo hay una solución.
                        <br /> <br /> Con mucha disciplina y la autoeducación constantemente son los puntos claves para lograr el éxito.
                    </p>
                    <a href="AbdielContreras.pdf" type="button" className="cta" download>  Descargar CV </a>
                </div>
            </div>
        </section>
    );
}

export default SobreMi;