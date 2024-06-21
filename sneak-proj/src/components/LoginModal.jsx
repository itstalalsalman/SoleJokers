import React, { useContext, useEffect } from 'react';
import { ModalContext } from '../App';


const LoginModal = () => {
  const { setIsModalOpen } = useContext(ModalContext);

  // Closing the modal when clicking outside of it
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (event.target.className === 'modal-background') {
        setIsModalOpen(false);
      }
    };
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [setIsModalOpen]);

  return (
    <div className="modal-background">
      {/* Demo Login Modal Set up for the Inital layout later to be configured according to specficied design needs */}
      <div className="modal-container">
        <button className="absolute top-2 right-2 text-2xl" onClick={() => setIsModalOpen(false)}>
          &times;
        </button>
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Email</label>
            <input type="email" className="w-full p-2 border rounded" />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Password</label>
            <input type="password" className="w-full p-2 border rounded" />
          </div>
          <button type="submit" className="w-full py-2 bg-blue-500 text-white rounded">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;