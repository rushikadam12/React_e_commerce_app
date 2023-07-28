import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navmenu } from './components/Menu'
import Home from './components/Home';
import Cart from './components/Cart'
import ShopCartConstProvider from './components/shop-context'
function App() {
  return (
    <>
     <ShopCartConstProvider>
      <div>
      
          <Router>
            <Navmenu />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </Router>
      
      </div>
      </ShopCartConstProvider>
    </>
  )
}

export default App;
