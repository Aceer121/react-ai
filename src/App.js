import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import SignIn from './components/SignIn';
import Navigation from './components/Navigation';
import './App.scss';

// Fixed the syntax here
const App = () => {
  return (
    <div className='app'>
    <div className='home'>
      {/* Removed the extra <div> with className 'Home' */}
      <React.StrictMode> {/* Place StrictMode around the root component */}
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/signin" element={<SignIn />} />
          </Routes>
        </BrowserRouter>
      </React.StrictMode>
    </div>
   </div>
  );
}

export default App;
