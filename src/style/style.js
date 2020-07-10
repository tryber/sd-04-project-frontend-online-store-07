import styled, { css } from 'styled-components';

export const Container = styled.div`
  top: 0;
  width: 100%;
  display: flex;
  padding: 0;
  overflow: hidden;
  box-sizing: border-box;
  font-size: 100%;
`;

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

  ${(props) => props.center && css`
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

  p {
    font-size: 20px;
    margin: 50px;
  }

  h4 {
    font-weight: 400;
    margin: 1.3em;
  }

  h3 {
    color: #3C096C;
    text-align: center;
    text-transform: uppercase;
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
  max-width: 290px;
  max-height: 350px;
  box-sizing: border-box;
  margin: 0.5em;
  padding: 0.3em;

  ${(props) => props.title && css`
    height: 58px;
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
    font-size: 0.9em;
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

export const Table = styled.table`
  border-collapse: collapse;
  width: 670px;
`;

export const Td = styled.td`
border-width: 1px 2px 1px 2px;
border-style: solid;
border-color: rgb(189, 187, 187);

  ${(props) => props.imagem && css`
    width: 100px;
    heigth: 100px;
    text-align: center;
  `};

  ${(props) => props.titulo && css`
    width: 410px;
    padding: 0 0.5em 0 1em;
    box-sizing: border-box;
  `};

  ${(props) => props.quantidade && css`
    box-sizing: border-box;
    width: 40px;
    text-align: center;
  `};

  ${(props) => props.preco && css`
    box-sizing: border-box;
    text-align: center;
  `};
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

export const Load = styled.div`
ul {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0;
  padding: 0;
  display: flex;
}

ul li {
  list-style-position: inside;
  color: #3c096c;
  width: 20px;
  heigth: 20px;
  background-color: #3c096c;
  margin: 0 5px;
  border-radius: 50%;
  animation: animate 1.4s linear infinite;
}

@keyframes animate {
  0% {
    transform:translateY(0);
  }
  60% {
    transform:translateY(0);
  }
  80% {
    transform:translateY(-20px);
  }
  100% {
    transform:translateY(0px);
  }
}

ul li:nth-child(1) {
  animation-delay: 0;
}

ul li:nth-child(2) {
  animation-delay: -1.2s;
}

ul li:nth-child(3) {
  animation-delay: -1s;
}

ul li:nth-child(4) {
  animation-delay: -0.8s;
}

ul li:nth-child(5) {
  animation-delay: -0.6s;
}
`;
