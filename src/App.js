import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import 'materialize-css';
import About from './components/About';
import Contact from './components/Contact';
import FsPortfolio from './components/FsPortfolio';
import Resume from './components/Resume';

import Footer from './components/Footer/'
import Navbar from './components/Navbar';
import Header from './components/Header';
import HeaderImages from './components/HeaderImages';


function App() {
  return (
    <div className="App">

        <Router>
          <Header />
          <HeaderImages />
          <div className="container">
          <Navbar />
          <Switch>
            <Route exact path="/" component={About} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/fs-portfolio" component={FsPortfolio} />
            <Route exact path="/resume" component={Resume} />

          </ Switch>
          <Redirect to="/about" component={About} />
          </div>

          <Footer />
        </Router>
      </div>
  );
}

export default App;
