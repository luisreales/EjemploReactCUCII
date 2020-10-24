import React from 'react'
const Mensaje = ({size, color, contenido}) => {

    const styles = {
        color: color,
        fontSize:size
    }
    return (
        <div>
            <h3 style={styles}>{contenido}</h3>
        </div>
        
     
      );
}
 
export default Mensaje;