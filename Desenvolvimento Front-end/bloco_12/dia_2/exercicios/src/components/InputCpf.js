import React from 'react';

export default class InputCpf extends React.Component{
  render() {
    const { onChange, value } = this.props

    return (
      <input maxlength="11" value={value} type="text" name="cpf" id="cpf" placeholder="cpf" onChange={onChange} required="true" />
    )
  }
}
