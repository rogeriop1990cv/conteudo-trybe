import React from 'react';
import pokemons from '../data';
import Pokemon from './Pokemon'

export default class Pokedex extends React.Component {
  render() {
    return (
       pokemons.map((pokemon) => <Pokemon key={pokemon.id} pokemon={pokemon} />)
    )
  }
}
