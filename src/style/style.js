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

  ${(props) => props.space && css`
    width: 55%;
  `}

  ${(props) => props.space2 && css`
    width: 40%;
  `}

  ${(props) => props.cart && css`
      width: 5%;
  `}
  
  ${(props) => props.ordem && css`
    width: 10%;
  `}
`;

export const Container = styled.div`
  top: 0;
  width: 100%;
  display: flex;
  padding: 0;
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

  ${(props) => props.pay && css`
    align-items: center;
  `}

  ${(props) => props.checkoutPage && css`
    flex-direction: column;
    align-items: center;
  `}

  ${(props) => props.form && css`
    justify-content: space-between;
  `}
`;

export const Form = styled.form`
  border: 2px solid #fbab7e;
  margin: 2em;
  padding: 2em;

  label {
    color: #3c096c;
    font-weight: 600;
  }

  ${(props) => props.details && css`
    margin: 1.25em 2em;
    width: 48%;
    display: flex;
    align-items: center;
    flex-direction: column;
  `}

  textarea {
    width: 45em;
    height: 10em;
  }

  div {
    margin: 0.30em;
  }
`;

export const Main = styled.article`
  max-width: 50%;
  min-width: 20%;
  margin: 0.5em 2em;
  padding: 0.5em;
  /* display: flex; */

  h3 {
    /* color: #E0AAFF; */
    color: #3C096C;
    text-align: center;
    text-transform: uppercase;
    /* background-color: #3C096C; */
    background-color: #fbab7e;
    padding: 0.5em;
    margin: 0.40em;
    border-radius: 5px;
  }

  ul li {
    list-style-type: circle;
    font-size: 1.2vw;
    line-height: 1.5;
    color: #3C096C;
    font-weight: 600;
  }
`;

export const Article = styled.article`
  color: #240046;
  width: 50%;
  padding: 2em;
  display: flex;
  justify-content: space-between;
  border: 2px solid #fbab7e;

  ${(props) => props.product && css`
    flex-direction: column;
    align-items: center;
    margin: 1.5em;
  `}

  p {
    font-size: 1.3vw;
    font-weight: 600;
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
  max-width: 295px;
  max-height: 350px;
  box-sizing: border-box;
  margin: 0.5em;
  padding: 0.3em;

  ${(props) => props.title && css`
    min-height: 60px;
    border: none;
    overflow: hidden;
  `};
`;

export const Button = styled.button`
  cursor: pointer;
  margin: 0.5em 0.25em;
  padding: 0.5em 1em;
  
  ${(props) => props.details && css`
    background-color: #3C096C;
    color: white;
    border: 2px solid #3c096c;
    border-radius: 3px;
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

  ${(props) => props.checkout && css`
    background-color: #3C096C;
    width: 10em;
    height: 4em;
    color: white;
    border: 2px solid #3c096c;
    border-radius: 3px;
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

export const ImagemProduct = styled.img`
  width: 13em;
  height: 13em;
`;

export const CSSFooter = styled.footer`
  display: absolute;
  background-color: #fbab7e;
  background-image: linear-gradient(62deg, #fbab7e 0%, #f7ce68 100%);
  text-align: center;
  width: 100%;
  margin-bottom: 0;
  margin-top: 5em;
  padding: 1em;
  font-size: 1vw;
  font-weight: 700;
  color: #3C096C;
`;
