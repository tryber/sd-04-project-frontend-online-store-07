import React from 'react';
import { Link } from 'react-router-dom';
import Brand from '../components/_general/Brand';
import { Container, Header, NavBar, Button, Main, Section, Td, Table } from '../style/style';

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
      <div data-testid="shopping-cart-empty-message">
        <p>Seu carrinho está vazio</p>
      </div>
    ) : (
      cartItems.map((item) => (
        <Table key={`${this.getQuantity(item.title)}`}>
          <tr>
            <Td imagem>
              <img src={item.thumbnail} alt={item.title} />
            </Td>
            <Td titulo data-testid="shopping-cart-product-name">
              {item.title}
            </Td>
            <Td quantidade data-testid="shopping-cart-product-quantity">
              {this.getQuantity(item.title)}
            </Td>
            <Td preco>
              {`R$${item.price.toFixed(2)}`}
            </Td>
          </tr>
        </Table>
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
        <Section center>
          <Main>
            <i data-testeid="shopping-cart-button" />
            <h3>Carrinho de Compras</h3>
            {this.renderItems()}
            <Link to="/checkout">
              <Button details type="button" data-testid="checkout-products">
                Concluir Compra
              </Button>
            </Link>
          </Main>
        </Section>
      </div>
    );
  }
}
export default ShoppingCart;
