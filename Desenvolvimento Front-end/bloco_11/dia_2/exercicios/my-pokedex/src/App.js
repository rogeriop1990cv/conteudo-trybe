import Pokemon from './components/Pokemon'
import pokemons from './data';

function App() {
  return (
    <Pokemon pokemon={pokemons[0]}/>
  );
}

export default App;
