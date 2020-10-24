import React, { Component } from 'react';

class Contador  extends Component{
    state = {count:0}; //inicializamos el state a 0

    render(){
        const {count} = this.state;
        return (
            <div>
                <p>Has hecho click {count} veces</p>
                {/* Actualizamos el state usando el metodo setState */}
                <button onClick={() => this.setState({count: count + 1})}>
                    Haz Click!
                </button>
            </div>
        )
    }
}

export default Contador;