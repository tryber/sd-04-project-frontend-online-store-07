import styled, { css } from 'styled-components';

export const ContainerPage = styled.div`
  top: 0;
  width: 100%;
  display: flex;
  /* justify-content: space-between;
  align-items: center; */
  padding: 0;
  margin: 0;
  overflow: hidden;
  box-sizing: border-box;
  font-size: 100%;

  /* ${props =>
    props.nav &&
    css`
      background: palevioletred;
      color: white;
    `} */
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
    color: #582c4d;
    font-size: 35px;
  }

  ${props =>
    props.div &&
    css`
      display: flex;
      flex-direction: column;
    `}
  ${props =>
    props.img &&
    css`
      align-items: flex-start;
      display: flex;
    `}
`;

export const Container = styled.div`
  display: flex;
  width: 300px;
  justify-content: space-between;
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
`
