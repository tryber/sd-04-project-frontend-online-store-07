import React from 'react';
import UserInfo from '../components/checkout/UserInfo';
import FormInput from '../components/_general/FormInput';
import logo from '../media/Logo.png';
import { Container, Header, NavBar } from '../style/style';

class Checkout extends React.Component {
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
        <div>
          <p>Resumo dos produtos</p>
        </div>
        <UserInfo />
        <div>
          <h3>Forma de pagamento</h3>
          <FormInput
            label="Cartão de Credito"
            value="Cartão de Credito"
            type="radio"
            name="pagamento"
          />
          <FormInput
            label="Cartão de Debito"
            value="Cartão de Debito"
            type="radio"
            name="pagamento"
          />
          <FormInput
            label="Boleto"
            value="Boleto"
            type="radio"
            name="pagamento"
          />
        </div>
        <div>
          <buttom type="button">
            Finalizar Compra
          </buttom>
        </div>
      </div>
      </>
    );
  }
}

export default Checkout;
