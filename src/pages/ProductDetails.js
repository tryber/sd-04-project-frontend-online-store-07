/* eslint-disable no-useless-constructor */
import { Link } from 'react-router-dom';
import React from 'react';
import InfoProduct from '../components/product_details/infoProduct';
import Comment from '../components/product_details/Comment';
import getItemForId from '../services/apiId';
import Brand from '../components/_general/Brand';
import Footer from '../components/_general/Footer';
import { Container, Header, NavBar } from '../style/style';

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
          <Container>
            <Header>
              <Brand />
              <NavBar space2/>
              <NavBar cart>
                <Link to="/cart" data-testid="shopping-cart-button">
                  <i className="fas fa-shopping-cart fa-2x" />
                </Link>
              </NavBar>
            </Header>
          </Container>
          <InfoProduct product={product} />
          <Comment />
        <Footer />
      </div>
    );
  }
}

export default ProductDetails;
