import React from 'react';

export default class ButtonImg extends React.Component {
  render() {
    const { onClick } = this.props;

    return (
      <button type="button" onClick={ onClick }>Nova foto</button>
    );
  }
}
