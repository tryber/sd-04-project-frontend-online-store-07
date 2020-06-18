import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css';

class Product extends React.Component {
  render() {
    const { thumbnail, title, price, id } = this.props.product;
    return (
      <div className="container" data-testid="product">
        <div className="product">
          <h3>{title}</h3>
          <img src={thumbnail} alt={title} />
          <p>{`Preço: ${price}`}</p>
          <Link className="buttomShop" data-testid="product-detail-link" to={`/product/${id}`}>
            Ver detalhes
          </Link>
        </div>
      </div>
    );
  }
}

export default Product;
