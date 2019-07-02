import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from './view/Main'
import ProductDetail from './view/ProductDetail'
import NotFound from './view/NotFound'

function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/product/:id" component={ProductDetail} />
          <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
  );
}

export default App;
