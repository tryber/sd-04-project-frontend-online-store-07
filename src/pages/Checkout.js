import React from 'react';
import UserInfo from '../components/checkout/UserInfo';
import FormInput from '../components/_general/FormInput';
import logo from '../media/Logo.png';
import { Container, Header, NavBar, Button } from '../style/style';

class Checkout extends React.Component {
  pay() {
    return (
      <div>
        <h3>Forma de pagamento</h3>
        <FormInput
          label={<i style={{ color: "#240046" }} className="fab fa-cc-visa fa-4x" />}
          value="Cartão Visa"
          type="radio"
          name="pagamento"
        />
        <FormInput
          label={<i style={{ color: "#240046" }} className="fab fa-cc-mastercard fa-4x" />}
          value="Cartão MasterCard"
          type="radio"
          name="pagamento"
        />
        <FormInput
          label={<i style={{ color: "#240046" }} className="fas fa-barcode fa-4x" />}
          value="Boleto"
          type="radio"
          name="pagamento"
        />
        <FormInput
          label={<i style={{ color: "#240046" }} className="fab fa-cc-paypal fa-4x" />}
          value="Paypal"
          type="radio"
          name="pagamento"
        />
      </div>
    );
  }

  render() {
    return (
      <>
        <Container>
          <Header>
            <NavBar>
              <img src={logo} alt="logo" />
              <h1>JAM & Peanut Butter</h1>
            </NavBar>
            <NavBar space />
          </Header>
        </Container>
        <div>
          {/* <div>
            <p>Resumo dos produtos</p>
          </div> */}
          <UserInfo />
          {this.pay()}
          <div>
            <Button type="button">Finalizar Compra</Button>
          </div>
        </div>
      </>
    );
  }
}

export default Checkout;
