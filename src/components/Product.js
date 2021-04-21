import React from 'react';

class Product extends React.Component {
  
  render() {
    return (
      <h2>{this.props.name}</h2>
      <p>Producer: {this.props.producer}</p>
    );
  }
}

Product.propTypes = {
  name: PropType.string.isRequired,
  hasWatermakr: PropType.bool,
  color: PropType.string.isRequired,
  weight: PropType.string.isRequired
}