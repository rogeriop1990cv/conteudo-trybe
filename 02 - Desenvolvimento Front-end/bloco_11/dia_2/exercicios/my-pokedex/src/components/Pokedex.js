import React from 'react';
import pokemons from '../data';
import Pokemon from './Pokemon'

export default class Pokedex extends React.Component {
  render() {
    return (
     
        <section className="pokedex">
          {pokemons.map((pokemon) => <Pokemon key={pokemon.id} pokemon={pokemon} />)}
        </section>
    )
  }
}
