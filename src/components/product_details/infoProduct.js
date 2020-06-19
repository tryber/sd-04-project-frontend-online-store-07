import React from 'react';
import freeShipping from '../../media/shipp.png';
import AddAndDecrease from './AddAndDecrease';
import AddToCart from '../addToCartButton';
import Image from '../image';

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

class infoProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = { quantity: 0 };
    this.HandleAddDecrease = this.HandleAddDecrease.bind(this);
  }

  HandleAddDecrease(value) {
    const quant = this.state.quantity;
    const total = this.props.product.available_quantity;
    if (value === 'dec' && quant > 0) this.setState({ quantity: (quant - 1)});
    if (value === 'add' && quant < total) this.setState({ quantity: (quant + 1)});
  }

  render() {
    const { price, thumbnail, title, attributes, shipping } = this.props.product;
    const availableQuantity = this.props.product.available_quantity;
    const quantity = this.state.quantity;
    if (!this.props.product) return <h1>Loading...</h1>;
    return (
      <div className="">
        <div className="">
          <h3 data-testid="product-detail-name">{title}</h3>
          <div className="images">
            <img src={thumbnail} className="image-detail" alt={title} />
            {(shipping.free_shipping) && FreeShipping() }
          </div>
          <p>{`Preço: $${price}`}</p>
          <div>
            <p>Informações Adicionais: </p>
            <ul>
              {attributes.map((attribute) => (
                <li key={attribute.id}>
                  {attribute.name}: {attribute.value_name}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p>Quantidade Disponível: {availableQuantity}</p>
            <AddAndDecrease callback={this.HandleAddDecrease} value={quantity} />
          </div>
          <div className="buttomShop">
            <AddToCart item={this.props.product} testid="product-detail-add-to-cart" />
          </div>
        </div>
      </div>
    );
  }
}

export default infoProduct;
