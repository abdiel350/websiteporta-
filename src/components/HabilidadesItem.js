import React from 'react';

const HabilidadesItem = ({ img }) => {
    return (     
        <div className="skill-item card-shadow">
            <img src={ img.image } alt="not-found" />           
        </div>         
    );
}
 
export default HabilidadesItem;