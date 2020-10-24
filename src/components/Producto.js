import React from 'react';
const producto = ({producto}) => {

    const {nombre, precio, id} = producto;
    return (
        <div>
            <h2>{nombre}</h2>
            <h2>${precio}</h2>            
        </div>
    
        
        
    );
}
 
export default producto;