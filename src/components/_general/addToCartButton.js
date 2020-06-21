import React from 'react';

const AddToCart = (props) => {
  const { item, testid } = props;

  const addToCart = (itemParam) => {
    if (!localStorage.cartItems) localStorage.cartItems = JSON.stringify([]);
    const cartItems = JSON.parse(localStorage.cartItems);
    const updatecartItems = [...cartItems, itemParam];
    localStorage.cartItems = JSON.stringify(updatecartItems);
  };
  return (
    <button data-testid={testid} type="button" onClick={() => addToCart(item)}>
      Comprar
    </button>
  );
};

export default AddToCart;
