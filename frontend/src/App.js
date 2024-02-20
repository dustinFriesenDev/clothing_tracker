import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { useAuth0 } from '@auth0/auth0-react';

import Header from './components/nav/Header';
import Footer from './components/nav/Footer';
// import LoginButton from './components/auth/LoginButton';
import Home from './components/pages/Home';
import Wardrobe from './components/pages/Wardrobe';

function App() {
  // const { isLoading, error, isAuthenticated } = useAuth0();
  return (
    <main>
    <Router className="header">
    <Header/>
    {/* {error && <p>Authentication Error</p>}
    {!error && isLoading && <p>Loading...</p>}
    {!error && !isLoading && (
      <>
      <LoginButton/>
      </>
    )} */}
      <Routes>
      <Route path='/wardrobe' element={<Wardrobe/>} />
        {/* Show these pages only if the user is authenticated */}
        {/* {isAuthenticated && (
          <>
            <Route path='/wardrobe' element={<Wardrobe/>} />
          </>
        )} */}
      </Routes>
        <Footer />
    </Router>
    
    </main>
  );
}

export default App;
