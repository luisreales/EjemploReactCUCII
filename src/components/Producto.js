import React from 'react';
const producto = ({producto,carrito,agregarProducto,productos}) => {

    const {nombre, precio, id} = producto;

    //agregar producto al carrito
    const selecionarProducto = id =>{
        const producto = productos.filter(producto => producto.id === id )[0];
                agregarProducto([
                    ...carrito, 
                    producto
                ]);
    }
    const eliminarProducto = id =>{
        // const productos = carrito.filter(producto => producto.id !== id);
        // agregarProducto([
        //     ...carrito,
        //     productos
        // ])
        const productos = carrito.filter(producto => producto.id !== id);

        // Colocar los productos en el state
        agregarProducto(productos)

    }
    return (
        <div>
            <h2>{nombre}</h2>
            <h2>${precio}</h2>            
            {productos
                ?
                (
                    <button type="button" id="comprar" onClick={() => selecionarProducto(id)}>Comprar</button>
                )
                :
                (
                    <button type="button" id="comprar" onClick={() => eliminarProducto(id)}>Eliminar</button>
                )
            }
            
            
        </div>
    
        
        
    );
}
 
export default producto;

// import React from 'react';

// const Producto = ({producto, carrito, agregarProducto, productos}) => {


//     const { nombre, precio, id } = producto;

//     // Agregar producto al carrito
//     const seleccionarProducto = id => {
//         const producto = productos.filter(producto => producto.id === id )[0];
//         agregarProducto([
//             ...carrito, 
//             producto
//         ]);
//     }

//     // Elimina un producto del carrito
//     const eliminarProducto = id => {
//         const productos = carrito.filter(producto => producto.id !== id);

//         // Colocar los productos en el state
//         agregarProducto(productos)
//     }

//     return ( 
//         <div>
//             <h2>{nombre}</h2>
//             <p>${precio}</p>
            
//             { productos 
//             ?
//                 (
//                     <button 
//                         type="button"
//                         onClick={ () => seleccionarProducto(id) }
//                     >Comprar</button>
//                 )
//             : 
//                 (
//                     <button 
//                         type="button"
//                         onClick={ () => eliminarProducto(id) }
//                     >Eliminar</button>
//                 )
//             }
//         </div>
//      );
// }

 
// export default Producto;