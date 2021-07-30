import React from 'react';

export default class InputEndereco extends React.Component{
  render() {
    const { onChange, value } = this.props

    return (
      <input maxlength="200" value={value} type="text" name="endereco"
      id="endereco" placeholder="Endereco" onChange={onChange} required="true" />
    )
  }
}
