import React, { Component } from 'react';

class ShoppingCart extends Component {
  constructor(props) {
    super(props);
    this.state = { products: '' };
  }

  render() {
    const { products } = this.state;
    if (products === '') {
      return <span data-testid="shopping-cart-empty-message">Seu carrinho está vazio</span>;
    }
    return (products);
  }
}

export default ShoppingCart;
