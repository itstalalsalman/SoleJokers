import React, { useState, createContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home'
import './App.css'
import Navbar from './components/Navbar';
import Shop from './components/Shop';
import Brands from './components/Brands';
import LoginModal from './components/LoginModal';

export const ModalContext = createContext();

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <ModalContext.Provider value={{ isModalOpen, setIsModalOpen }}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/brands" element={<Brands />} />
        </Routes>
        {isModalOpen && <LoginModal />}
      </Router>
    </ModalContext.Provider>
  )
}

export default App