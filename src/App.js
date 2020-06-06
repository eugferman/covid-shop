
// React imports
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
// import { useSelector } from 'react-redux';

import Home from './pages/Home/Home';
import AboutUs from './pages/AboutUs/AboutUs';
import Products from './pages/Products/Products';
import Contact from './pages/Contact/Contact';
import LoginArea from './pages/LoginArea/LoginArea';

import './App.scss';

function App() {
  // const name = useSelector((state) => state.dataLoginUser);

  return (
    <div>
      <Router>
        <div className="header-menu">
          <div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/aboutus">About Us</Link>
              </li>
              <li>
                <Link to="/products">Products</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <Link to="/loginarea">Login</Link>
              </li>
              <li>
                <a href="https://google.es">Cart</a>
              </li>
            </ul>
          </div>
        </div>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/aboutus">
            <AboutUs />
          </Route>
          <Route path="/products">
            <Products />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/loginarea">
            <LoginArea />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
