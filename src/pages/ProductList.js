import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Categories from '../components/product_list/Categories';

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = { products: '' };
  }

  render() {
    const { products } = this.state;
    if (products === '') {
      return (
        <div>
          <div className="categorias">
            <p>Categorias:</p>
            <Categories />
          </div>
          <Link to="/cart" data-testid="shopping-cart-button">
            Comprar
          </Link>
          <div data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </div>
        </div>
      );
    }
    return <p>Deu ruim</p>;
  }
}

export default ProductList;
