import React from 'react';
import Pokemon from './Pokemon'
import pokemons from '../data';

export default class Pokedex extends React.Component {
  render() {
    return (
      <Pokemon pokemon={pokemons[7]} />
    )
  }
}
