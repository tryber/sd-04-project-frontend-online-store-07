import React from 'react';
import { Link } from 'react-router-dom';
import Brand from '../components/_general/Brand';
import { Container, Header, NavBar } from '../style/style';

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cartItems: [] };
    this.renderItems = this.renderItems.bind(this);
  }

  componentDidMount() {
    this.updateItem();
  }

  getQuantity(itemTitle) {
    const { cartItems } = this.state;
    const quantity = cartItems.filter(({ title }) => itemTitle === title).length;
    return quantity;
  }

  updateItem() {
    if (!localStorage.cartItems) localStorage.cartItems = JSON.stringify([]);
    const cartItems = JSON.parse(localStorage.cartItems);
    this.setState({ cartItems });
  }

  renderItems() {
    const { cartItems } = this.state;
    return cartItems.length === 0 ? (
      <div className="shopping-cart-empty" data-testid="shopping-cart-empty-message">
        Seu carrinho está vazio
      </div>
    ) : (
      cartItems.map((item) => (
        <div key={`${this.getQuantity(item.title)}`}>
          <span data-testid="shopping-cart-product-name" className="item-title">
            {item.title}
          </span>
          <span data-testid="shopping-cart-product-quantity" className="item-quantity">
            {this.getQuantity(item.title)}
          </span>
        </div>
      ))
    );
  }

  render() {
    return (
      <div>
        <Container>
          <Header>
            <Brand />
            <NavBar space />
          </Header>
        </Container>
        <div className="shopping-cart">
          <i data-testeid="shopping-cart-button" />
          <p>Carrinho de Compras</p>
          {this.renderItems()}
          <Link to="/checkout">
            <button type="button" data-testid="checkout-products">
              Concluir Compra
            </button>
          </Link>
        </div>
      </div>
    );
  }
}
export default ShoppingCart;
