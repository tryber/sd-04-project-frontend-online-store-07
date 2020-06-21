import React from 'react';
import FormInput from '../_general/FormInput';

class UserInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: '',
      email: '',
      cpf: '',
      phone: '',
      cep: '',
      address: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.nativeEvent.target.name]: event.nativeEvent.target.value });
  }

  renderNumbers() {
    const { cpf, phone, cep } = this.state;

    return (
      <form>
        <FormInput
          label="CPF"
          caracters={11}
          name="cpf"
          value={cpf}
          test="checkout-cpf"
          onChange={this.handleChange}
        />
        <FormInput
          label="Telefone"
          caracters={14}
          name="phone"
          value={phone}
          test="checkout-phone"
          onChange={this.handleChange}
        />
        <FormInput
          label="CEP"
          caracters={8}
          name="cep"
          value={cep}
          test="checkout-cep"
          onChange={this.handleChange}
        />
      </form>
    );
  }

  renderText() {
    const { fullName, email, address } = this.state;
    return (
      <div>
        <FormInput
          label="Nome Completo"
          name="fullName"
          value={fullName}
          test="checkout-fullname"
          onChange={this.handleChange}
        />
        <FormInput
          label="Email"
          type="email"
          name="email"
          value={email}
          test="checkout-email"
          onChange={this.handleChange}
        />
        {this.renderNumbers()}
        <FormInput
          label="Endereço"
          name="address"
          value={address}
          test="checkout-address"
          onChange={this.handleChange}
        />
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.renderText()}
      </div>
    );
  }
}

export default UserInfo;
