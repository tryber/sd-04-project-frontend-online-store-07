import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import ProductList from './pages/ProductList';
// import ProductDetails from './pages/ProductDetails';
// import ShoppingCart from './pages/ShoppingCart';
// import Checkout from './pages/Checkout';
// import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ProductList} />
        {/* <Route exact path="/" component={ProductDetails} />
        <Route exact path="/" component={ShoppingCart} />
        <Route exact path="/checkout" component={Checkout} />
      <Route component={NotFound} /> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
