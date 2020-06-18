/* eslint-disable no-useless-constructor */
import React from 'react';
import InfoProduct from '../components/product_details/infoProduct';
import * as api from '../services/api';


class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: '',
    };
  }

  componentDidMount() {
    const searchId = this.props.match.params.id;
    api.getItemForId(searchId).then((resolve) => this.setState({ product: resolve }));
  }

  render() {
    const { product } = this.state;
    return (
      <div>
        <InfoProduct product={product} />
      </div>
    );
  }
}

export default ProductDetails;