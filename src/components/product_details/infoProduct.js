import { Link } from 'react-router-dom';
import React from 'react';

class infoProduct extends React.Component {
  render() {
    const { price, thumbnail, title } = this.props.product;
    const availableQuantity = this.props.product.available_quantity;
    return (
      <div className="container">
        <div className="product">
          <h3 data-testid="product-detail-name">{title}</h3>
          <img src={thumbnail} alt={title} />
          <p>{`Preço: $${price}`}</p>
          <p>Quantidade Disponível: {availableQuantity}</p>
          <p>Informações Adicionais: </p>
          <div className="buttomShop">
            <Link to="/cart">Ir para o Carrinho</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default infoProduct;
