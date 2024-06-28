import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/Home/sign-up-form/sign-up-form.component';
import Navigation from './routes/navigation/navigation.component';
import './App.scss';

const App = () => {
  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='signin' element={<SignIn />} />
          <Route path='sign-up' element={<SignUp />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
