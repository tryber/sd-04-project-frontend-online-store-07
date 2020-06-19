import React from 'react';
import UserInfo from '../components/checkout/UserInfo';

class Checkout extends React.Component {
  render() {
    return (
      <div>
        <div>
          <p>Resumo dos produtos</p>
        </div>
        <UserInfo />
        <div>
          <h3>Forma de pagamento</h3>
          <button type="radio">Cartão de Credito</button>
          <button type="radio">Cartão de Debito</button>
          <button type="radio">Boleto</button>
        </div>
        <div>
          <buttom type="button">
            Finalizar Compra
          </buttom>
        </div>
      </div>
    );
  }
}

export default Checkout;
