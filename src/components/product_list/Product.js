import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css';
import freeShipping from '../../media/shipp.png';
import AddToCart from '../addToCartButton';

function FreeShipping() {
  return (
    <img
      className="shippImage"
      data-testid="free-shipping"
      src={freeShipping}
      alt="Free Shipping"
    />
  );
}

class Product extends React.Component {
  render() {
    const { product } = this.props;
    const { thumbnail, title, price, id, shipping } = product;
    return (
      <div className="container" data-testid="product">
        <div className="product">
          <h3>{title}</h3>
          <div className="images">
            <img src={thumbnail} alt={title} />
            {shipping.free_shipping && FreeShipping()}
          </div>
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
