import React from 'react';
import InputCidade from './components/InputCidade';
import InputCpf from './components/InputCpf';
import InputEmail from './components/InputEmail';
import InputEndereco from './components/InputEndereco';
import InputName from './components/InputName';
import RadioHome from './components/RadioHome';
import SelectEstado from './components/SelectEstado';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      nome: '',
      email: '',
      cpf: '',
      endereco: '',
      cidade: '',
      home: '',
      estado: '',
      qlq:''
    }
  }
 

  handleChange = (e) => {
    let { name, value } = e.target;
    if (name === 'nome') value = value.toUpperCase();
    if (name === 'endereco') value = value.replace(/["!@#$%*]/g, "");
    this.setState({ [name]: value });
  }
  handleBlur = (e) => {
    let { name, value } = e.target;
    value = value.match(/^[0-9]/)? '' : value;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div>
        <form action="">
          <fieldset>
            <InputName value={this.state.nome} onChange={this.handleChange} /><br />
            <InputEmail value={this.state.email} onChange={this.handleChange} /><br />
            <InputCpf value={this.state.cpf} onChange={this.handleChange} /><br />
            <InputEndereco value={this.state.endereco} onChange={this.handleChange} />
            <RadioHome value={this.state.home} onChange={this.handleChange} />
            <SelectEstado value={this.state.estado} onChange={this.handleChange} />
            <InputCidade  value={this.state.cidade} onChange={this.handleChange} onBlur={this.handleBlur} />
          </fieldset>
          <button type="submit">Enviar</button>
        </form>
      </div>
    )
  }
}


export default App;

