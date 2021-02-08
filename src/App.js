import React from 'react';
import './App.css';
import Header from './components/Header';
import Menu from './components/Menu';
import List from './components/List';
import About from './components/About';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route } from 'react-router-dom';


function App() {

  return (
    <Router>
      <div className="App">
        <Header />
        <Route path='/' exact component={Menu} />
        <Route path='/' exact component={List} />
        <Route path='/about' component={About} />
        <Footer />
      </div>
    </Router>
  );

}

export default App;
