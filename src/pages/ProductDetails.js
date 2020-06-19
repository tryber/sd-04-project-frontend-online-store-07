/* eslint-disable no-useless-constructor */
import React from 'react';
import InfoProduct from '../components/product_details/infoProduct';
import getItemForId from '../services/apiId';
import './PorductDetails.css';


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
      </div>
    );
  }
}

export default ProductDetails;
