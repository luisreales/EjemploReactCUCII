import React from 'react';
import './Header.css'

function Header({titulo}){
    //basico JSX
    // const edad = 17;
    // const nombre = 'Luis';

    // let mensaje = "";

    // if(edad >= 18){
    //     mensaje = "eres mayor de edad"
    // }else{
    //     mensaje = "eres menor de edad"
    // }

    //ver el contenido de los props
    // console.log(props)



    //antes del return se pueden declarar variables.
    /*Todo lo que se coloca dnetro del return es lo que se va 
    a ver en pantalla*/
    return(
        <div className="header">
           {/* <h1 id="titulo">Saludos desde Header</h1>
            <h4>Hola {nombre}, tu edad es {edad} , entonces {mensaje}</h4> */}
            <h1>{titulo}</h1>
        </div>
    )
}

export default Header;