import Pokemon from './components/Pokemon'
import pokemons from './data';

function App() {
  return (
    <Pokemon pokemon={pokemons[5]}/>
  );
}

export default App;
