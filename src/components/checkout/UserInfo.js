import React from 'react';
import FormInput from '../FormInput';

class UserInfo extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {};
  // }

  render() {
    return (
      <div>
        <form>
          <FormInput label="Nome Completo" name="full-name" test="checkout-fullname" />
          <FormInput label="Email" type="email" name="email" test="checkout-email" />
          <FormInput label="CPF" caracters={11} name="cpf" test="checkout-cpf" />
          <FormInput label="Telefone" caracters={14} name="phone" test="checkout-phone" />
          <FormInput label="CEP" caracters={8} name="cep" test="checkout-cep" />
          <FormInput label="Endereço" name="address" test="checkout-address" />
        </form>
      </div>
    );
  }
}

export default UserInfo;
