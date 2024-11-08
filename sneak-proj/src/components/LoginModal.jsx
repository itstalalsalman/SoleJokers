import React, { useContext, useEffect, useState } from 'react';
import { ModalContext } from '../App';


const LoginModal = () => {
  const { setIsModalOpen } = useContext(ModalContext);
  const [isRegisterView, setIsRegisterView] = useState(false); //State switching between the login and register components and styling animations


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
    <div className="modal-background inter">
      {/* Demo Login Modal Set up for the Inital layout later to be configured according to specficied design needs */}
      <div className="modal-container flex justify-center items-center">
        <button className="absolute top-0 right-2 text-4xl text-white hover:rotate-45 transition-all ease-in-out" onClick={() => setIsModalOpen(false)}>
          &times;
        </button>
        <div className={`transition-all duration-500 ease-in-out flex flex-col justify-center items-center ${
            isRegisterView ? 'w-[40%]' : 'w-[60%]'}`}>
          <h2 className={`transition-opacity duration-700 ease-in text-4xl font-extrabold italic mb-4 text-center ${isRegisterView && 'text-5xl w-[80%] h-[20%]'}`}>{isRegisterView ? 'Already a SoleJoker?': 'Login'}</h2>
          
          {!isRegisterView ? (
              <form className='w-[80%] flex flex-col justify-center items-center'>
                <div className='w-full'>
                  <label className="block text-sm font-semibold mb-2 italic">Email</label>
                  <input type="email" className="w-full py-2 px-3 border rounded placeholder:text-[#529CDF] placeholder:opacity-50" placeholder='e.g. solejokers@gmail.com'/>
                  
                  <label className="block text-sm font-semibold my-2 italic">Password</label>
                  <input type="password" className="w-full py-2 px-3 border rounded" />
                </div>
                
                <button type="submit" className="w-[150px] h-[45px] border-black font-semibold bg-white text-[#529CDF] border-[3px] hover:border-black rounded-xl rounded-br-[50px] hover:bg-[#529CDF] hover:text-white hover:transition-colors duration-200 ease-inrounded mt-8">
                  Login
                </button>
              </form>
          ) : (
              <button onClick={() => setIsRegisterView(false)} className='w-[150px] h-[45px] border-black font-semibold bg-white text-[#529CDF] border-[3px] hover:border-black rounded-xl rounded-br-[50px] hover:bg-[#529CDF] hover:text-white hover:transition-colors duration-200 ease-inrounded mt-8'>SignIn</button>
          )}
        </div>
        <div className={`transition-all h-full duration-500 ease-in-out flex flex-col justify-center items-center bg-[#529CDF] text-white ${
            isRegisterView ? 'w-[60%] opacity-100' : 'w-[40%] opacity-100'
          } rounded-tl-xl rounded-bl-xl rounded-tr-lg rounded-br-lg gap-5`}>
            <h2 className={`text-5xl font-extrabold text-white italic text-center leading-[60px] ${isRegisterView && 'text-[30px]'}`}>{isRegisterView ? 'Register' : 'New to SoleJokers?'}</h2>
            {isRegisterView ? (
            <form className="w-[80%] flex flex-col justify-center items-start">
              <label className="block text-sm font-semibold mb-2 italic">Email</label>
              <input
                type="email"
                className="w-full py-2 px-3 border rounded placeholder:text-[#529CDF] placeholder:opacity-50"
                placeholder="e.g. solejokers@gmail.com"
              />
              <label className="block text-sm font-semibold my-2 italic">Password</label>
              <input type="password" className="w-full py-2 px-3 border rounded" />
              <label className="block text-sm font-semibold my-2 italic">Confirm Password</label>
              <input type="password" className="w-full py-2 px-3 border rounded" />
              <button
                type="submit"
                className="w-[150px] h-[45px] border-white font-semibold bg-white text-[#529CDF] border-[3px] hover:border-black rounded-xl rounded-br-[50px] hover:bg-[#529CDF] hover:text-white hover:transition-colors duration-200 ease-in mt-8"
              >
                Register
              </button>
            </form>
          ) : (
            <button
              onClick={() => setIsRegisterView(true)}
              className="w-[150px] h-[45px] border-white font-semibold bg-white text-[#529CDF] border-[3px] hover:border-black rounded-xl rounded-br-[50px] hover:bg-[#529CDF] hover:text-white hover:transition-colors duration-200 ease-in"
            >
              Register
            </button>
          )}           
        </div>
      </div>
    </div>
  );
};

export default LoginModal;