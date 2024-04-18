import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './App.css';

import Home from './components/Home';
import About from './components/About';
import SignIn from './components/SignIn';

function App() {
   return (
    <div className='App'>
    <Router>
        <Routes>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/signin" component={SignIn} />
        </Routes>
    </Router>
    </div> 
  );
 }
export default App;
