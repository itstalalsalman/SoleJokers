import React, { useState, createContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home'
import './App.css'
import Navbar from './components/Navbar';
import Shop from '../pages/Shop';
import Brands from '../pages/Brands';
import LoginModal from './components/LoginModal';
import Footer from './components/Footer';
import { useStore } from './store';

export const ModalContext = createContext();

const App = () => {
  const { isModalOpen, setIsModalOpen } = useStore();

  return (
    <ModalContext.Provider value={{ isModalOpen, setIsModalOpen }}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/brands" element={<Brands />} />
        </Routes>
        <Footer />
        {isModalOpen && <LoginModal />}
      </Router>
    </ModalContext.Provider>
  )
}

export default App