// App.js
import React from 'react';
import { BrowserRouter as Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import SignIn from './components/SignIn';

function App() {
  return (
    <Routes>
      <div className="App" style={{ backgroundColor: 'black', height: '100vh', display: 'flex', 
            flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <h1 style={{ color: 'white' }}>React AI</h1>
        <nav>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/signin">Sign In</Link></li>
          </ul>
        </nav>
        
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/signin" component={SignIn} />

      </div>
    </Routes>
  );
}

export default App;
