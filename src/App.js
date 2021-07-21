import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Info from './components/Info';
import Todo from './components/Todo/Todo';
import NavBar from './components/NavBar';
import ModalForm from './components/Form/ModalForm';
import Cart from './components/Cart/Cart';
import Favorite from './components/Cart/Favorite';

function App() {
  return (
    <div className="app">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Todo} />
          <Route path="/info" component={Info} />
          <Route path="/form" component={ModalForm} />
          <Route path="/cart" component={Cart} />
          <Route path="/favorite" component={Favorite} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
