import styled, { css } from 'styled-components';

export const Container = styled.div`
  top: 0;
  width: 100%;
  display: flex;
  padding: 0;
  margin: 0;
  overflow: hidden;
  box-sizing: border-box;
  font-size: 100%;
`;

export const Section = styled.section`
  display: flex;
  
`;

export const Main = styled.article`
  width: 20%;
  margin: 0.25em 2em;
  padding: 0.5em;

  h3 {
    text-align: center;
    text-transform: uppercase;
    background-color: #fbab7e;
    padding: 0.25em;
    border-radius: 5px;
  }
`;

export const Aside = styled.aside`
  width: 70%;

  h3 {
    text-align: center;
    margin: 2em;
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  height: 100px;
  justify-content: space-around;
  position: static;
  width: 100%;
  background-color: #fbab7e;
  background-image: linear-gradient(62deg, #fbab7e 0%, #f7ce68 100%);
`;

export const NavBar = styled.nav`
  height: 100px;
  display: flex;
  align-items: center;

  img {
    margin-right: 10px;
    width: 120px;
    height: 80px;
  }

  h1 {
    color: #3C096C;
    font-size: 35px;
  }

  ${props =>
    props.div && css`
      display: flex;
      flex-direction: column;
    `}
  ${props => props.cart && css`
      width: 10px;
      height: 10px;
  `}
`;

export const Button = styled.button`

${props => props.search && css`
      background: transparent;
      border-radius: 3px;
      border: 2px solid #3c096c;
      color: #5a189a;
      margin: 0.5em 0.25em;
      padding: 0.5em 1em;
      cursor: pointer;
  `}
`;
