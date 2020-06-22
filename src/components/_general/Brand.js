import React from 'react';
import logo from '../../media/Logo.png';
import { NavBar } from '../../style/style';
import { Link } from 'react-router-dom';
class Brand extends React.Component {

  render() {
    return (
      <NavBar>
          <img src={logo} alt="logo" />
        <Link to="/">
          <h1>JAM & Peanut Butter</h1>
        </Link>
      </NavBar>
    );
  }
}

export default Brand;
