import React from 'react';
// import { Link } from 'react-router-dom';
import './Product.css';

class Product extends React.Component {
  render() {
    const { thumbnail, title, price } = this.props.product;
    return (
      <div className="container" data-testid="product">
        <div className="product">
          <h3>{title}</h3>
          <img src={thumbnail} alt={title} />
          <p>{`Preço: ${price}`}</p>
          {/* <div className="buttomShop" data-testid="product-add-to-cart">
            <Link to={`/product/${id}`}>Ver detalhes</Link>
          </div> */}
        </div>
      </div>
    );
  }
}

export default Product;
