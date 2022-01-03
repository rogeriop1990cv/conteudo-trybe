import React from 'react';

export default class InputNameButton extends React.Component {
  render() {
    const { onClick } = this.props;
    const inputButton = document.getElementById('button-add-nome');
    return (
      <>
        <input id="button-add-nome" type="text" placeholder="De nome ao doguinho..." />
        <br />
        <button type="button" onClick={ () => onClick(inputButton.value) }>Add Nome</button>
      </>
    );
  }
}
