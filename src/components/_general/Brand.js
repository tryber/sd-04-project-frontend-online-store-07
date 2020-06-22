import React from 'react';
import logo from '../../media/Logo.png';
import { NavBar } from '../../style/style';

class Brand extends React.Component {

  render() {
    return (
      <NavBar>
        <img src={logo} alt="logo" />
        <h1>JAM & Peanut Butter</h1>
      </NavBar>
    );
  }
}

export default Brand;
