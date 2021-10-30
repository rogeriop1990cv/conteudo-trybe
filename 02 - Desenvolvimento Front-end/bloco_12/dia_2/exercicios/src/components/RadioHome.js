import React from 'react'

export default class RadioHome extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor="casa">
          <input type="radio" name="home" id="home" />Casa
        </label>
        <label htmlFor="apartamento">
          <input type="radio" name="home" id="apartamento" checked />Apartamento
        </label>
      </div>
    )
  }
}
