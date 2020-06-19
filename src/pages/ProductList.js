import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Categories from '../components/product_list/Categories';
import Product from '../components/product_list/Product';
import Search from '../components/product_list/Search';
import './ProductList.css';
import * as api from '../services/api';

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = { products: '', searchValue: '' };
    this.OnChangeSearchBar = this.OnChangeSearchBar.bind(this);
    this.Requisition = this.Requisition.bind(this);
  }

  OnChangeSearchBar(event) {
    this.setState({ searchValue: event.target.value });
    console.log(this.state.searchValue);
  }

  Requisition(event) {
    const query = this.state.searchValue;
    const categoryId = event.target.id;
    if (query && categoryId) {
      api
        .getProductsFromCategoryAndQuery({ categoryId, query })
        .then((results) => this.setState({ products: results.results }));
    } else if (categoryId) {
      api
        .getProductsFromCategoryAndQuery({ categoryId })
        .then((results) => this.setState({ products: results.results }));
    } else {
      api
        .getProductsFromCategoryAndQuery({ query })
        .then((results) => this.setState({ products: results.results }));
    }
    this.setState({ products: '', searchValue: '' });
  }

  headerSearch() {
    return (
      <div className="search">
        <Search
          value={this.state.searchValue}
          onChange={this.OnChangeSearchBar}
          onClick={this.Requisition}
        />
      </div>
    );
  }

  Categories() {
    return (
      <div>
        <div className="categories">
          <p>Categorias:</p>
          <Categories onChange={this.Requisition} />
        </div>
      </div>
    );
  }

  render() {
    const { products } = this.state;
    if (products === '') {
      return (
        <div>
          {this.headerSearch()}
          <div className="main">
            {this.Categories()}
            <Link to="/cart" data-testid="shopping-cart-button">
              Ir para o Carrinho
            </Link>
            <div data-testid="home-initial-message">
              Digite algum termo de pesquisa ou escolha uma categoria.
            </div>
          </div>
        </div>
      );
    }
    return (
      <div>
        {this.headerSearch()}
        <Link to="/cart" data-testid="shopping-cart-button">
          Ir para o Carrinho
        </Link>
        <div className="main">
          {this.Categories()}
          <div className="products">
            {products.map((elem) => (
              <Product product={elem} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default ProductList;
