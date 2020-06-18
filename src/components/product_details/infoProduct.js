import React from 'react';
import Loading from '../Loading';
import { Link } from 'react-router-dom';

class infoProduct extends React.Component {
  constructor(props) {
    super(props)
    this.state = { loading: true };
  }

  componentDidMount() {
    setTimeout(() => this.setState({ loading: false }), 2000);
  }

  render() {
    const { price, thumbnail, title, available_quantity } = this.props.product;
    if (this.state.loading) return <h1>Loading...</h1>;
    return (
      <div className="container" data-testid="product">
        <div className="product" data-testid="product-detail-name">
          <h3>{title}</h3>
          <img src={thumbnail} alt={title} />
          <p>{`Preço: $${price}`}</p>
          <p>Quantidade Disponível: {available_quantity}</p>
          <p>Informações Adicionais: </p>
          <div className="buttomShop">
            <Link to={`/cart`}>Ir para o Carrinho</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default infoProduct;
