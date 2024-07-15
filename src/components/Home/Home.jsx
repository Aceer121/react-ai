import React from 'react';
import './home.styles.scss';

const Home = () => {
  return (
    <div className="background">
      <div className="header">
        <h2 className="title">React AI</h2>
        <input className="search-box" type="search" placeholder="Message React AI" />
        <button className="button">Click Search</button>
      </div>
      <p>Welcome to React AI!</p>
      <footer className="footer">
        <p>&copy; 2024 React AI. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
