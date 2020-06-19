import { Link } from 'react-router-dom';
import React from 'react';
import freeShipping from '../../media/shipp.png';

class infoProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = { imagePath: freeShipping };
    this.FreeShipping = this.FreeShipping.bind(this);
  }

  FreeShipping() {
    return (
      <img
        className="shippImage"
        data-testid="free-shipping"
        src={this.state.imagePath}
        alt="Free Shipping"
      />
    );
  }

  render() {
    const { price, thumbnail, title, attributes, shipping } = this.props.product;
    const availableQuantity = this.props.product.available_quantity;
    if (!this.props.product) return <h1>Loading...</h1>;
    return (
      <div className="container">
        <div className="product">
          <h3 data-testid="product-detail-name">{title}</h3>
          <div className="images">
            <img src={thumbnail} alt={title} />
            {(shipping.free_shipping) && this.FreeShipping() }
          </div>
          <p>{`Preço: $${price}`}</p>
          <p>Quantidade Disponível: {availableQuantity}</p>
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
          <div className="buttomShop">
            <Link to="/cart" data-testid="product-detail-add-to-cart">Ir para o Carrinho</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default infoProduct;
