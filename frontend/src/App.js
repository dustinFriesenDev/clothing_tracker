// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { useAuth0 } from '@auth0/auth0-react';

import Header from './components/nav/Header.js';
import Footer from './components/nav/Footer.js';
// import LoginButton from './components/auth/LoginButton';
import Home from './components/pages/Home.js';
import Wardrobe from './components/pages/Wardrobe.js';

function App() {
  // const { isLoading, error, isAuthenticated } = useAuth0();
  return (
    <main>
    <Router className="header">
    <Header/>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route path='/wardrobe' element={<Wardrobe/>} />
      </Routes>
        <Footer />
    </Router>
    
    </main>
  );
}

export default App;
