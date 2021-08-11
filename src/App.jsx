import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Header from './components/header.jsx'
import HomePage from './components/homePage.jsx'
import Cart from './components/cart.jsx'
import Login from './components/login.jsx'
import Shop from './components/shop.jsx'

import Footer from './components/footer.jsx'
import Menu from './components/menu.jsx'

console.log(window.shoppingCart);

function App() {
  return (
    <div>
    <Router>
    <Header />
    <Switch>
    <Route path="/" exact component={() => <HomePage />}/>
    <Route path="/menu" exact component={() => <Menu />}/>
    <Route path="/cart" exact component={() => <Cart />}/>
    <Route path="/login" exact component={() => <Login />}/>
    <Route path="/shop" exact component={() => <Shop />}/>
    </Switch>
    <Footer />
    </Router>
    </div>
  );
}

export default App;
