
import React,{useState} from 'react';

export function ContadorHook(){
    
    // useState recibe un parámetro: el valor inicial del estado (que será 0)
    // y devuelve un array de dos posiciones:
    //  la primera (count), tiene el valor del estado
    //  la segunda (setCount), el método para actualizar el estado

    const [count, setCount] = useState(0);

    return (
        <div>
          <p>Has hecho click desde hooks {count} veces</p>
          { /* actualizamos el state al hacer click con setCount */ }
          <button onClick={() => setCount(count + 1)}>
            Haz click desde hooks!
          </button>
        </div>
      )
}
