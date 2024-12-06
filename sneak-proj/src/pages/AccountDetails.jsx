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
    setHasEnteredInfo,
    fetchUserInfo,
    saveUserInfo,
  } = useStore();

  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    country: '',
    city: '',
    district: '',
    address: '',
    postalCode: '',
  });

  const [isEditView, setIsEditView] = useState(false);

  useEffect(() => {
    if (hasEnteredInfo) {
      fetchUserInfo();
    }
  }, [hasEnteredInfo, fetchUserInfo]);

  useEffect(() => {
    if (userInfo) {
      setFormData(userInfo);
    }
  }, [userInfo]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
      saveUserInfo(formData);
      setIsEditView(false)
  };

  const iconsStyle = {position: 'absolute', cursor: 'pointer', top: '10px', right: '20px'};

  return (
    <div className='w-full min-h-[100vh] flex justify-center items-center mb-12 z-0 px-[5%]'>
      <div className='w-[40%] h-full'>
        <img src={avatarShoe} alt='avatar' className='w-[200px] rounded-full' />
        <h1 className='text-[80px] font-extrabold italic leading-[100px]'>Your <br />Account Info</h1>
      </div>
      <div className='w-[50%] h-full'>
        {hasEnteredInfo ? (
          <div className='w-full h-[100%] pl-5 relative justify-center items-start'>
            <h2 className='text-[24px] font-bold mb-4 italic'>{!isEditView ? 'Details' : 'Enter/Update Your Details'}</h2>
            {!isEditView ? <MdEdit style={iconsStyle} onClick={() => setIsEditView(true)}/> : <IoMdClose style={iconsStyle} onClick={() => setIsEditView(false)}/>}
            {!isEditView ? 
                (
                    <UserPersonalInfo formData={formData} />
                )
            :
                (
                    <EditUserInfoForm formData={formData} handleSubmit={handleSubmit} handleInputChange={handleInputChange} />
                )
            }
          </div>
        ) : (
            <EditUserInfoForm formData={formData} handleSubmit={handleSubmit} handleInputChange={handleInputChange} />
        )}
      </div>
    </div>
  );
};

export default AccountDetails;
