import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Categories from '../components/product_list/Categories';
import Product from '../components/product_list/Product';
import * as api from '../services/api';

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = { products: '' };
    this.OnChangeRequisition = this.OnChangeRequisition.bind(this);
  }

  OnChangeRequisition(event) {
    const categoryId = event.target.id;
    api.getProductsFromCategoryAndQuery({ categoryId })
      .then((results) => this.setState({ products: results.results }));
  }

  render() {
    const { products } = this.state;
    if (products === '') {
      return (
        <div>
          <div className="categorias">
            <p>Categorias:</p>
            <Categories onChange={this.OnChangeRequisition} />
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
    return (
      <div>
        <div className="categorias">
          <p>Categorias:</p>
          <Categories onChange={this.OnChangeRequisition} />
        </div>
        <div>
          {products.map((elem) => <Product product={elem} />)}
        </div>
      </div>
    );
  }
}

export default ProductList;
