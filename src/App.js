import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/login';
import Products from './components/Products';
import Logout from './components/Logout';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history'
import { Provider } from 'react-redux'
import store from './store'
import Cart from './components/Cart'
const history = createBrowserHistory();
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router history={history}>
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path='/products' component={Products} />
            <Route path='/cart' component={Cart} />
            <Route path='/logout' component={Logout} />
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
