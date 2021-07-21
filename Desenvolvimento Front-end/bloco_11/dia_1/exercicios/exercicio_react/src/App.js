import logo from './logo.svg';
import './App.css';

const Task = (value) => {
  const listItem = value.map((i) => <li>{i}</li>)
  return (
    <ul>{listItem}</ul>
  );
}

const lista = ['naruto', 'carro', 'anime', 'tudo']

function App() {
  return (
    Task(lista)
  );
}
export default App;

