import React from 'react';
import './home.styles.scss';

const Home = () => {
  return (
    <div className="background">
      <div className="header">
        <h2>React Ai</h2>
        <input className="search-box" type="search" placeholder="message ai" />
      </div>
      <p>Welcome to the React Ai!</p>
    </div>
  );
};

export default Home;
