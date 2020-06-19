import React from 'react';
import AddToCart from '../addToCartButton';
import Image from '../image';

class infoProduct extends React.Component {
  render() {
    const { price, thumbnail, title, attributes, shipping } = this.props.product;
    const availableQuantity = this.props.product.available_quantity;
    if (!this.props.product) return <h1>Loading...</h1>;
    return (
      <div className="container">
        <div className="product">
          <h3 data-testid="product-detail-name">{title}</h3>
          <Image thumbnail={thumbnail} title={title} shipping={shipping.free_shipping} />
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
            <AddToCart item={this.props.product} testid="product-detail-add-to-cart" />
          </div>
        </div>
      </div>
    );
  }
}

export default infoProduct;
