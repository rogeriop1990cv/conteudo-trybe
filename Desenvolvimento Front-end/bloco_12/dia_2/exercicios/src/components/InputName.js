import React from 'react';
import PropTypes from 'prop-types';

export default class InputName extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      name:''
    }
  }
  render() {
    const { onChange, value} = this.props
    return (
      <input maxlength="40" value={value} type='text' name='nome'
        id='nome' placeholder="Digite seu Nome." onChange={onChange} required="true" />
    )
  }
}
  InputName.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
}
