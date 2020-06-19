import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Categories from '../components/product_list/Categories';
import Product from '../components/product_list/Product';
import Search from '../components/product_list/Search';
import Dropdown from '../components/product_list/Dropdown'
import './ProductList.css';
import * as api from '../services/api';

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = { products: '', searchValue: '' };
    this.OnChangeSearchBar = this.OnChangeSearchBar.bind(this);
    this.Requisition = this.Requisition.bind(this);
    this.sortByPriceDsc = this.sortByPriceDsc.bind(this);
    this.sortByPriceAsc = this.sortByPriceAsc.bind(this);
  }

  OnChangeSearchBar(event) {
    this.setState({ searchValue: event.target.value });
  }

  Requisition(event) {
    const query = this.state.searchValue;
    const categoryId = event.target.id;
    if (query && categoryId) {
      api.getProductsFromCategoryAndQuery({ categoryId, query })
        .then((results) => this.setState({ products: results.results }));
    } else if (categoryId) {
      api.getProductsFromCategoryAndQuery({ categoryId })
        .then((results) => this.setState({ products: results.results }));
    } else {
      api.getProductsFromCategoryAndQuery({ query })
        .then((results) => this.setState({ products: results.results }));
    }
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

  sortByPriceDsc() {
    const { products } = this.state;
    const sortedProductsAsc = products.sort((a, b) => {
      let comparison = 0;
      if (a.price > b.price) {
        comparison = 1;
      } else if (a.price < b.price) {
        comparison = -1;
      }
      return comparison;
    });
    this.setState({ products: sortedProductsAsc });
  }

  sortByPriceAsc() {
    const { products } = this.state;
    const sortedProductsAsc = products.sort((a, b) => (a.price - b.price));
    return this.setState({ products: sortedProductsAsc });
  }

  render() {
    const { products } = this.state;
    console.log("render");
    console.log(products);

    if (products === '') {
      return (
        <div>
          {this.headerSearch()}
          <div className="main">
            {this.Categories()}
            <Link to="/cart" data-testid="shopping-cart-button">
              Comprar
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
        <div className="main">
          <Dropdown>
            <option value="maior" name="maior" onClick={this.sortByPriceDsc}>Maior Preço</option>
            <option value="menor" name="menor" onClick={this.sortByPriceAsc}>Menor Preço</option>
          </Dropdown>
          {this.Categories()}
          <div className="products">
            {products.map((elem) => <Product key={elem.id} product={elem} />)}
          </div>
        </div>
      </div>
    );
  }
}

export default ProductList;
