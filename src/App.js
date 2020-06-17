import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ProductList from './pages/ProductList';
// import ProductDetails from './pages/ProductDetails';
// import ShoppingCart from './pages/ShoppingCart';
// import Checkout from './pages/Checkout';
// import NotFound from './pages/NotFound';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ProductList} />
      {/* <Route exact path="/" component={ProductDetails} />
      <Route exact path="/" component={ShoppingCart} />
      <Route exact path="/checkout" component={Checkout} />
      <Route component={NotFound} /> */}
    </Switch>
  );
}

export default App;
