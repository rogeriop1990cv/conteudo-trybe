import React from 'react';
import PropTypes from 'prop-types';

export default class Pokemon extends React.Component{
  render() {
    const { name, type, averageWeight:{value, measurementUnit}, image } = this.props.pokemon;
    return (
      <section>
        <div>
          <h1>{name}</h1>
          <p>{type}</p>
          <p>averageWeigh: {value} {measurementUnit}</p>
        </div>
        <div><img src={image} alt={`Nome desse Pokemon é ${name}`} /></div>
      </section>
    )
  }
}

Pokemon.defaultProps = {
  pokemon: {}
};

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.number,
    measurementUnit: PropTypes.string,
    image: PropTypes.string
  })
}
