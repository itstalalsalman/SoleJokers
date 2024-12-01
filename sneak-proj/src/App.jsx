import React, { createContext, Suspense, useEffect, useState } from 'react';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { useStore } from './store';
import Shop from './pages/Shop';
import LoginModal from './components/LoginModal'
import Home from './pages/Home';
import Brands from './pages/Brands';

export const ModalContext = createContext();

// Caching component for routes
const CachedRoutes = () => {
  const location = useLocation();
  const [pages, setPages] = useState({});

  // Storing the element for the current route
  if (!pages[location.pathname]) {
    const routeElement = (() => {
      switch (location.pathname) {
        case '/':
          return (
              <Home />
        );
        case '/shop':
          return (
              <Shop />
        );
        case '/brands':
          return (
              <Brands />
        );
        default:
          return (
              <Home />
        ); // Fallback to Home for undefined routes
      }
    })();

    setPages((prev) => ({
      ...prev,
      [location.pathname]: routeElement,
    }));
  }

  return (
    <>
      {Object.keys(pages).map((path) => (
        <div
          key={path}
          style={{ display: path === location.pathname ? 'block' : 'none' }}
        >
          {pages[path]}
        </div>
      ))}
    </>
  );
};

const App = () => {
  const { isModalOpen, setIsModalOpen, initializeAuth } = useStore();
  useEffect(() => {
    const initAuth = async () => {
      await initializeAuth();
    };
    initAuth();
  }, [initializeAuth]);

  return (
    <ModalContext.Provider value={{ isModalOpen, setIsModalOpen }}>
        <Router>
          <Navbar />
          <CachedRoutes />
          <Footer />
          {isModalOpen && <LoginModal />}
        </Router>
    </ModalContext.Provider>
  );
};

export default React.memo(App);
