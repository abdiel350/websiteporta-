import React from 'react';
import ContactItem from './ContactItem';

const Contact = () => {
    const personalData = [
        {
            image: "/img/contact/cellphone.png",
            title: "Teléfono",
            value: "+51 929 481 xxx"
        },
        {
            image: "/img/contact/email.png",
            title: "Correo",
            value: "contrerasabdiel@gmail.com"
        },
        {
            image: "/img/contact/location.png",
            title: "Ubicación",
            value: "Lima, Perú"
        }
    ]

    return (
        <section id="contact">
            <div className="contact container">
                <div> <h1 className="section-title"> Información De <span>Contacto</span> </h1> </div>
                <div className="contact-items">
                    {personalData.map((information, index) =>
                        <ContactItem
                            key={index}
                            information={information}
                        />
                    )}
                </div>
            </div>
        </section>
    );
}

export default Contact;