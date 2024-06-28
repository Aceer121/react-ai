import React from 'react';
import './home.styles.scss';

const Home = () => {
  return (
    <div className="background">
      <div className="header">
        <h2>About</h2>
        <input className="search-box" type="search" placeholder="message ai" />
      </div>
      <p>React Ai is a website strictly used as an experiment!</p>
    </div>
  );
};

export default Home;