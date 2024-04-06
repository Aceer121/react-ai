import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import SignIn from './components/SignIn';

function App() {
  const buttonStyle = {
    color: 'white',
    textDecoration: 'none',
    fontSize: '25px', // Adjust the font size as needed
    margin: '0 10px',
  };

  return (
    <Router>
      <div className="App" style={{ backgroundColor: 'black', height: '100vh', position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <h1 style={{ color: 'white' }}>React AI</h1>
        <div style={{ textAlign: 'center' }}>
          <input type="text" placeholder="Search..." style={{ width: '300px', padding: '10px', borderRadius: '5px', border: '2px solid #ccc', backgroundColor: 'white' }} />
        </div>
        <div style={{ position: 'absolute', top: 0, right: 0 }}>
          <nav>
            <ul style={{ listStyleType: 'none', padding: 0, display: 'flex' }}>
              <li style={{ marginRight: '10px' }}><Link to="/" style={buttonStyle}>Home</Link></li>
              <li style={{ marginRight: '10px' }}><Link to="/about" style={buttonStyle}>About</Link></li>
              <li><Link to="/signin" style={buttonStyle}>Sign In</Link></li>
            </ul>
          </nav>
        </div>
      
        <Routes>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/signin" component={SignIn} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;
