import React, { Component } from 'react';

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = { products: '' };
  }

  render() {
    const { products } = this.state;
    if (products === '') {
      return (
        <div data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </div>
      );
    }
    return <p>Deu ruim</p>;
  }
}

export default ProductList;
