import React from 'react';

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
      <div className="shopping-cart">
        <br />
        <i data-testeid="shopping-cart-button" />
        <p>Carrinho de Compras</p>
        {this.renderItems()}
      </div>
    );
  }
}
export default ShoppingCart;
