import React from 'react';
import UserInfo from '../components/checkout/UserInfo';

class Checkout extends React.Component {
  render() {
    return (
      <div>
        <UserInfo />
        <buttom type="button">
          Finalizar Compra
        </buttom>
      </div>
    );
  }
}

export default Checkout;
