import React, { useEffect, useState } from 'react';
import {useStore} from '../store';
import { avatarShoe } from '../assets';
import UserPersonalInfo from '../components/UserPersonalInfo';
import { MdEdit } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import EditUserInfoForm from '../components/EditUserInfoForm';



const AccountDetails = () => {
  const {
    hasEnteredInfo,
    userInfo,
    formData,
    setFormData,
    fetchUserInfo,
    saveUserInfo,
  } = useStore();

  const [isEditView, setIsEditView] = useState(false);

  const fetchData = () => fetchUserInfo(); // Dependency on a function reference

  useEffect(() => {
    if (hasEnteredInfo) {
      fetchData();
    }
  }, [hasEnteredInfo, fetchData]);

  useEffect(() => {
    if (userInfo) {
      setFormData(userInfo);
    }
  }, [userInfo]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({formData, [name]: value});  
  };

  const handleSubmit = () => {
      console.log(formData)
      saveUserInfo(formData);
      setIsEditView(false)
  };

  const iconsStyle = {position: 'absolute', cursor: 'pointer', top: '10px', right: '20px', fill: '#529CDF'};

  return (
    <div className='w-full min-h-[100vh] flex justify-center items-center mb-12 z-0 px-[5%]'>
      <div className='w-[40%] h-full'>
        <img src={avatarShoe} alt='avatar' className='w-[200px] rounded-full' />
        <h1 className='text-[80px] font-extrabold italic leading-[100px]'>Your <br />Account Info</h1>
      </div>
      <div className='w-[50%] h-full relative'>
        <h2 className='text-[24px] font-bold mb-4 pl-5 italic'>{!isEditView ? 'Details' : 'Enter/Update Your Details'}</h2>
        {!isEditView ? <MdEdit style={iconsStyle} onClick={() => setIsEditView(true)}/> : <IoMdClose style={iconsStyle} onClick={() => setIsEditView(false)}/>}
        {hasEnteredInfo ? (
          <div className='w-full h-[100%] pl-5 justify-center items-start'>
            {!isEditView ? 
                (
                    <UserPersonalInfo formData={formData} />
                )
            :
                (
                    <EditUserInfoForm handleSubmit={handleSubmit} handleInputChange={handleInputChange} />
                )
            }
          </div>
        ) : (
            <EditUserInfoForm handleSubmit={handleSubmit} handleInputChange={handleInputChange} />
        )}
      </div>
    </div>
  );
};

export default AccountDetails;
