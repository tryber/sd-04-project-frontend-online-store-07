import styled, { css } from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  height: 135px;
  justify-content: space-around;
  position: static;
  width: 100%;
  background-color: #fbab7e;
  background-image: linear-gradient(62deg, #fbab7e 0%, #f7ce68 100%);
`;

export const NavBar = styled.nav`
  display: flex;
  align-items: center;

  img {
    width: 140px;
    height: 95px;
  }

  h1 {
    margin-left: 0.5em;
    color: #3C096C;
    font-size: 2.3vw;
  }

  ${props => props.space && css`
    width: 55%;
  `}

  ${props => props.cart && css`
      width: 5%;
  `}
  ${props => props.ordem && css`
    width: 10%;
  `}
`; 

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
  
  ${(props) => props.image && css`
  align-items: center;
    min-height: 95px;
    justify-content: space-around;
  `};

  ${(props) => props.buttons && css`
    align-items: center;
    justify-content: center;
    margin-bottom: 5px;
  `};
`;

export const Main = styled.article`
  width: 20%;
  margin: 0.25em 2em;
  padding: 0.5em;

  h3 {
    /* color: #E0AAFF; */
    color: #3C096C;
    text-align: center;
    text-transform: uppercase;
    /* background-color: #3C096C; */
    background-color: #fbab7e;
    padding: 0.25em;
    border-radius: 5px;
  }
`;

export const Aside = styled.aside`
  width: 70%;
  color: #3C096C;
  text-align: center;

  ${(props) => props.card && css`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 2em;
  `};

  h3 {
    font-size: 1.3vw;
    margin: 0.75em;
    min-height: 60px;
  }

  h4 {
    margin: 2em;
    font-size: 1.5vw;
  }
`;

export const Card = styled.div`
  border: 2px solid #3c096c;
  max-width: 30%;
  max-height: 10%;
  margin: 0.5em;
  padding: 0.3em;
`;

export const Button = styled.button`
  cursor: pointer;
  margin: 0.5em 0.25em;
  padding: 0.5em 1em;
  
  ${(props) => props.details && css`
    background-color: #3C096C;
    color: white;
    border: 2px solid #3c096c;
  `};
  
  ${(props) => props.search && css`
      color: #5a189a;
      background: transparent;
      border-radius: 3px;
      border: 2px solid #3c096c;
  `};

  ${(props) => props.cart && css`
    background-color: transparent;
    border: none;
  `};
`;

export const Sort = styled.div`
  select {
    padding: 0.5em 0.5em;
    color: #10002B;
    background-color: transparent;
    border: 2px solid #3c096c;
    cursor: pointer;
    border-radius: 5px;
  }

  select:focus,
  select:hover {
    outline: none;
    border: 2px solid #3c096c;
  }

  option {
    color: #240046;
    background: #f7ce68;
  }
`;
