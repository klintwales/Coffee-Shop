import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Header from './components/header.jsx'
import HomePage from './components/homePage.jsx'

import Footer from './components/footer.jsx'
import Menu from './components/menu.jsx'

function App() {
  return (
    <div>
    <Router>
    <Header />
    <Switch>
    <Route path="/" exact component={() => <HomePage />}/>
    <Route path="/menu" exact component={() => <Menu />}/>
    </Switch>
    <Footer />
    </Router>
    </div>
  );
}

export default App;
