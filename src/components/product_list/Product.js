import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css';

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = { freeShippingImage: '../../media/freeShipping.jpeg' }
  }

  render() {
    const { thumbnail, title, price, id, shipping } = this.props.product;
    const shippingPath = this.props.freeShippingImage;
    return (
      <div className="container" data-testid="product">
        <div className="product">
          <h3>{title}</h3>
          <div>
            <img src={thumbnail} alt={title} />
            {(shipping.free_shipping) && <img data-testid="free-shipping" href={shippingPath} alt="Free Shipping" /> }
          </div>
          <p>{`Preço: ${price}`}</p>
          <div className="button-container">
            <div className="buttomShop">
              <Link to={`/product/${id}`} data-testid="product-detail-link">Ver detalhes</Link>
            </div>
            <div className="buttomShop">
              <Link to="/cart" data-testid="product-add-to-cart">Ir para o Carrinho</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
