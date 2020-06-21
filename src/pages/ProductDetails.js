/* eslint-disable no-useless-constructor */
import { Link } from 'react-router-dom';
import React from 'react';
import InfoProduct from '../components/product_details/infoProduct';
import Comment from '../components/product_details/Comment';
import getItemForId from '../services/apiId';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = { product: '' };
  }

  componentDidMount() {
    const searchId = this.props.match.params.id;
    getItemForId(searchId).then((resolve) => this.setState({ product: resolve }));
  }

  render() {
    const { product } = this.state;
    return (
      <div>
        <InfoProduct product={product} />
        <Link to="/cart" data-testid="shopping-cart-button">
              Ir para o Carrinho
        </Link>
        <Comment />
      </div>
    );
  }
}

export default ProductDetails;
