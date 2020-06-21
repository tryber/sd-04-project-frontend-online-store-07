import React from 'react';
import { Link } from 'react-router-dom';
import freeShipping from '../../media/shipp.png';
import AddToCart from '../_general/addToCartButton';
import '../../style/style.css';
import { Button } from '../../style/style';

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
    const { thumbnail, title, price, id, shipping } = this.props.product;
    return (
      <div data-testid="product">
        <div>
          <h3>{title}</h3>
          <div>
            <img src={thumbnail} alt={title} />
            {(shipping.free_shipping) && FreeShipping() }
          </div>
          <p>{`Preço: ${price}`}</p>
          <div>
            <div>
              <Link to={`/product/${id}`} data-testid="product-detail-link">
              <Button details type="button">Ver detalhes</Button>
              </Link>
            </div>
            <div>
              <AddToCart testid="product-add-to-cart" item={this.props.product} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
