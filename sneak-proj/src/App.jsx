import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home'
import './App.css'
import Navbar from './components/Navbar';
import Shop from './components/Shop';
import Brands from './components/Brands';

const App = () => {
  return (
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/brands" element={<Brands />} />
        </Routes>
      </Router> 
  )
}

export default App