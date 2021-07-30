import React from 'react';

export default class InputEmail extends React.Component{
  render() {
    const { onChange, value} = this.props

    return (
      <input maxlength="50" value={value} type='text' name="email" id="email"
      placeholder="Email" onChange={onChange} required="true" />
    )
  }
}
