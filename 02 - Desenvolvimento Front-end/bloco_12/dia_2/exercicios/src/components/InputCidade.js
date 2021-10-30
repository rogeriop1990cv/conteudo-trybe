import React from 'react';

export default class InputCidade extends React.Component{
  render() {
    const { onChange, value, onBlur} = this.props

    return (
      <input maxlength="28" value={value} type="text" name="cidade"
      id="cidade" placeholder="Cidade" onChange={onChange} onBlur={onBlur} required="true" />
    )
  }
}
