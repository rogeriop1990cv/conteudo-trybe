import React from 'react'

export default class User extends React.Component {

  render() {
    const { user: { results: [{ name: { first, last }, email, picture: { large }, dob: { age } }] } } = this.props
    return (
      <section>
        <img src={ large } alt="Foto da pessoa" />
        <p>Nome: { first} </p>
        <p>Sobre Nome: { last }</p>
        <p>Idade: { age }</p>
        <p>Email: { email }</p>
    </section>
    )
  }
}
