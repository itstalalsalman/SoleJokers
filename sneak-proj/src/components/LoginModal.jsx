import { useStore } from '../store';  // Import the store for Zustand
import React, { useContext, useState, useEffect } from 'react';
import { ModalContext } from '../App';
import axios from 'axios';
import { validateInputs } from '../config/expressionChecks';

const LoginModal = () => {
  const { setIsModalOpen } = useContext(ModalContext);
  const { login, register, verify, email, setEmail } = useStore((state) => state);  // Use Zustand's login action
  const [isRegisterView, setIsRegisterView] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isVerificationView, setIsVerificationView] = useState(false);
  const [verificationCode, setVerificationCode] = useState('');
  const [emailError, setEmailError] = useState({
    state: false,
    msg: ''
  });
  const [passwordError, setPasswordError] = useState({
    state: false,
    msg: ''
  }); 
  
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

  
  const handleLogin = async (e) => {
    e.preventDefault();

    if(!validateInputs(email, password, setEmailError, setPasswordError)) return;
    
    try {
      await login(email, password);
      setIsModalOpen(false);
    } catch (error) {
      console.error('Login error:', error.response?.data.message || error.message);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault()

    if(!validateInputs(email, password, setEmailError, setPasswordError)) return;

    
    if (password !== confirmPassword) {
      console.error("Passwords do not match");
      return;
    }
    try {
      await register(email, password);
      setIsVerificationView(true);
    } catch (error) {
      console.error('Registration error:', error.response?.data.message || error.message);
    }
  };

  const handleVerify = async (e) => {
    e.preventDefault();
    console.log(verificationCode)
    try {
      await verify(email, verificationCode);
      await login(email, password);  // Update global login state using Zustand
      setIsModalOpen(false);
    } catch (error) {
      console.error('Verification error:', error.response?.data.message || error.message);
    }
  };

  return (
    <div className="modal-background inter z-40">
      {!isVerificationView ?
        <div className="modal-container flex justify-center items-center">
          <button className="absolute top-0 right-2 text-4xl text-white hover:rotate-45 transition-all ease-in-out" onClick={() => setIsModalOpen(false)}>
            &times;
          </button>
          <div className={`transition-all duration-500 ease-in-out flex flex-col justify-center items-center ${isRegisterView ? 'w-[40%]' : 'w-[60%]'}`}>
            <h2 className={`transition-opacity duration-700 ease-in text-4xl font-extrabold italic mb-4 text-center ${isRegisterView && 'text-5xl w-[80%] h-[20%]'}`}>{isRegisterView ? 'Already a SoleJoker?' : 'Login'}</h2>
            
            {!isRegisterView ? (
              <form onSubmit={handleLogin} className='w-[80%] flex flex-col justify-center items-center'>
                <div className='w-full'>
                  <label className="block text-sm font-semibold mb-2 italic">Email</label>
                  <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`w-full py-2 px-3 border ${emailError.state ? 'border-red-400 border-[2px]' : 'border'} rounded placeholder:text-[#529CDF] placeholder:opacity-50`}
                    placeholder="e.g. solejokers@gmail.com"
                  />
                  {emailError.state && <p className="text-red-400 italic text-sm p-1">{emailError.msg}</p>}
                  <label className="block text-sm font-semibold my-2 italic">Password</label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={`w-full py-2 px-3 border ${passwordError.state ? 'border-red-400 border-[2px]' : 'border'} rounded`}
                  />
                  {passwordError.state && <p className="text-red-400 italic text-sm p-1">{passwordError.msg}</p>}
                </div>
                
                <button type="submit" className="w-[150px] h-[45px] border-black font-semibold bg-white text-[#529CDF] border-[3px] hover:border-black rounded-xl rounded-br-[50px] hover:bg-[#529CDF] hover:text-white hover:transition-colors duration-200 ease-inrounded mt-8">
                  Login
                </button>
              </form>
            ) : (
              <button onClick={() => setIsRegisterView(false)} className='w-[150px] h-[45px] border-black font-semibold bg-white text-[#529CDF] border-[3px] hover:border-black rounded-xl rounded-br-[50px] hover:bg-[#529CDF] hover:text-white hover:transition-colors duration-200 ease-inrounded mt-8'>SignIn</button>
            )}
          </div>
          <div className={`transition-all h-full duration-500 ease-in-out flex flex-col justify-center items-center bg-[#529CDF] text-white ${isRegisterView ? 'w-[60%] opacity-100' : 'w-[40%] opacity-100'} rounded-tl-xl rounded-bl-xl rounded-tr-lg rounded-br-lg gap-5`}>
            <h2 className={`text-5xl w-[350px] font-extrabold text-white italic text-center leading-[60px] ${isRegisterView && 'text-[30px]'}`}>{isRegisterView ? 'Register' : 'New to SoleJokers?'}</h2>
            {isRegisterView ? (
              <form onSubmit={handleRegister} className="w-[80%] flex flex-col justify-center items-start">
                <label className="block text-sm font-semibold mb-2 italic">Email</label>
                <input
                  type="text"
                  className="w-full py-2 px-3 text-black border rounded placeholder:text-[#529CDF] placeholder:opacity-50"
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="e.g. solejokers@gmail.com"
                />
                <label className="block text-sm font-semibold my-2 italic">Password</label>
                <input 
                  type="password" 
                  className="w-full text-black py-2 px-3 border rounded" 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label className="block text-sm font-semibold my-2 italic">Confirm Password</label>
                <input 
                  type="password" 
                  className="w-full text-black py-2 px-3 border rounded" 
                  value={confirmPassword} 
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
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
                className="w-[150px] h-[45px] border-white font-semibold bg-white text-[#529CDF] border-[3px] hover:border-black rounded-xl rounded-br-[50px] hover:bg-[#529CDF] hover:text-white hover:transition-colors duration-200 ease-in mt-8"
              >
                Sign Up
              </button>
            )}
          </div>
        </div> :

        <div className='modal-container verification-modal-container flex flex-col justify-center items-center'>
          <h2 className="text-4xl font-extrabold  mb-4 text-center">
            Enter Verification Code
          </h2>
            <form onSubmit={handleVerify} className="w-[30%] flex flex-col gap-4 justify-center items-center">
              <label className="block text-sm font-semibold mb-2 italic">
                Enter the code send on your email
              </label>
              <input
                type="text"
                value={verificationCode}
                onChange={(e) => setVerificationCode(e.target.value)}
                className="w-full py-2 px-2 text-center	 border rounded"
                placeholder="Enter code.."
              />
              <button
                type="submit"
                className="w-[150px] h-[45px] mt-4 border-black font-semibold bg-white text-[#529CDF] border-[3px] rounded-xl rounded-br-[50px] hover:bg-[#529CDF] hover:text-white hover:transition-colors duration-200 ease-in"
              >
                Verify
              </button>
            </form>
        </div>
      }
    </div>
  );
};

export default LoginModal;
