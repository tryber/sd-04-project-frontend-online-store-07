import { Link } from 'react-router-dom';
import React from 'react';

class infoProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  componentDidMount() {
    setTimeout(() => this.setState({ loading: false }), 2000);
  }

  render() {
    const { price, thumbnail, title } = this.props.product;
    const availableQuantity = this.props.product[available_quantity];
    if (this.state.loading) return <h1>Loading...</h1>;
    return (
      <div className="container" data-testid="product">
        <div className="product" data-testid="product-detail-name">
          <h3>{title}</h3>
          <img src={thumbnail} alt={title} />
          <p>{`Preço: $${price}`}</p>
          <p>Quantidade Disponível: {availableQuantity}</p>
          <p>Informações Adicionais: </p>
          <div className="buttomShop">
            <Link to={'/cart'}>Ir para o Carrinho</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default infoProduct;
