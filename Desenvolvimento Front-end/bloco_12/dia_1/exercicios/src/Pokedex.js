import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
    constructor(props) {
        super(props);
        this.mudaValor = this.mudaValor.bind(this);
        this.state = {
            valor: 0,
        };
    }
    mudaValor() {
        if(this.state.valor >= 8){
           return this.setState({valor: 0})
        }
        this.setState({valor: this.state.valor + 1}) 
    };
    
    render() {
        return (
            <div>
                <div className="pokedex">
                    { <Pokemon key={this.props.pokemons[this.state.valor].id} pokemon={this.props.pokemons[this.state.valor]} /> }
                </div>
                <div>
                    <button onClick={this.mudaValor}>Proximo Pokemon</button>
                </div>
            </div>
        );
    }
}

export default Pokedex;
