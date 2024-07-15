import React from 'react';
import './about.styles.scss';

const About = () => {
  return (
    <div className="about-container">
      <h2 className="about-title">About</h2>
      <p className="about-text">
        React AI is a web based app only to be used as an experiment. This is just JSX
        rendered through the computer language called React founded by Facebook. Thus,
        the name React AI. If you would like to know more, sign-up to our newsletter.
      </p>
    </div>
  );
};

export default About;
