import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

import AppBar from './components/AppBar';
import Footer from './components/Footer';

function App() {
  const [brandName, setBrandName] = useState('QuizCraze');
  const [menuItems, setMenuItems] = useState(["Home","Leaderboard","Logout"]);
  const [loginText, setlLoginText] = useState('Login');

  return (
    <Router>
      <div>
        <AppBar 
          brand={brandName}
          menu={menuItems}
          login={loginText}
        />
        <Routes>
          <Route path="/" element={<Home setBrandName={setBrandName} setMenuItems={setMenuItems} setlLoginText={setlLoginText}/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
