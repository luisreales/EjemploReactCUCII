import React , {Fragment,useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Mensaje from './components/Mensaje';
import Contador from './components/Contador';
import {ContadorHook} from './components/ContadorHook';
import Producto from './components/Producto';
import Carrito from './components/Carrito';

function App() {
  const fecha = new Date().getFullYear();
  //Crear listado de productos, un array de objetos
  const [productos, guardarProductos] = useState([
    {id:1,nombre:'Camisa Junior',precio:100},
    {id:2,nombre:'Camisa America',precio:200},
    {id:3,nombre:'Camisa Nacional',precio:300},
    {id:4,nombre:'Camisa Real Cartagena',precio:500},
  ])

  //state para un carrito de compra
  const[carrito,agregarProducto] = useState([]);



  return (
    <Fragment>
         <Header titulo='Tienda Virtual El Carmelo' /> 
         {/* <Mensaje size='30px' color='#ff0000' contenido='AHORA' />
         <Mensaje size='40px' color='#00ff00' contenido='ENTIENDO' />
         <Mensaje size='60px' color='#0000ff' contenido='LOS PROPS :D' />
         <Contador /> 
         <ContadorHook />  */}
         {/* <Mensaje size='30px' color='#ff0000' contenido='AHORA' />
         <Mensaje size='40px' color='#00ff00' contenido='ENTIENDO' />
         <Mensaje size='60px' color='#0000ff' contenido='LOS PROPS :D' />
         <Contador /> 
         <ContadorHook /> */}
         <h1>Lista de Productos</h1>
         {productos.map(productoItem => (
           <Producto producto={productoItem} key={productoItem.id} carrito={carrito} agregarProducto={agregarProducto} productos={productos}/>
         ))}

         <Carrito carrito={carrito} agregarProducto={agregarProducto}/>


         <Footer fecha={fecha}/>
    </Fragment>
  );
}

export default App;
