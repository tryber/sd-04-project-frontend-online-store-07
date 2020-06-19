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
          <div className="button-container">
            <div className="buttomShop">
              <Link to={`/product/${id}`} data-testid="product-detail-link">
                Ver detalhes
              </Link>
            </div>
            <div className="buttomShop">
              <AddToCart testid="product-add-to-cart" item={product} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
