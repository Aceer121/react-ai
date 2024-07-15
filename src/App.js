import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home/home';
import About from './components/about/about';
import SignIn from './components/signin/signin';
import SignUp from './components/signup/signup';
import Navigation from './routes/navigation/navigation.component';

const App = () => {
    return (
        <Router>
            <Navigation />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='about' element={<About />} />
                <Route path='signin' element={<SignIn />} />
                <Route path='signup' element={<SignUp />} />
            </Routes>
        </Router>
    );
};

export default App;
