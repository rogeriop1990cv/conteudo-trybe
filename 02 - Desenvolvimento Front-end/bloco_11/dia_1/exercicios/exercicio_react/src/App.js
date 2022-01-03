import './App.css';

const Task = (value) => {
  const listItem = value.map((i) => <li key={i}>{i}</li>)
  return (
    <ul>{listItem}</ul>
  );
}

function Card(props) {
  return (
    <div className="card">
      <img className="card-img-top" src={props.featureImage} alt={props.title} />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>
        <a href={props.link} className="btn btn-primary">Learn more</a>
      </div>
    </div>
  );
}

const lista = ['naruto', 'carro', 'anime', 'tudo']

function App() {
  return (
    Task(lista)
  );
}
export default App;

