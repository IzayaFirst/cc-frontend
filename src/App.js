import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from './view/Main'
import NotFound from './view/NotFound'

function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
  );
}

export default App;
