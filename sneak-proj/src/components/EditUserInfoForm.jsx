import React from 'react';
import { useStore } from '../store';

const EditUserInfoForm = ({ formData, handleInputChange, handleSubmit }) => {
  const { hasEnteredInfo } = useStore();

  return (
    <div className="w-full h-auto space-y-4">
      {/* Name and Surname */}
      <div className="flex space-x-4">
        <div className="w-1/2">
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full h-[35px] px-4 py-2 border rounded-md"
          />
        </div>
        <div className="w-1/2">
          <label className="block text-sm font-medium text-gray-700">Surname</label>
          <input
            type="text"
            name="surname"
            placeholder="Enter your surname"
            value={formData.surname}
            onChange={handleInputChange}
            className="w-full h-[35px] px-4 py-2 border rounded-md"
          />
        </div>
      </div>

      {/* Country and City */}
      <div className="flex space-x-4">
        <div className="w-1/2">
          <label className="block text-sm font-medium text-gray-700">Country</label>
          <input
            type="text"
            name="country"
            placeholder="Enter your country"
            value={formData.country}
            onChange={handleInputChange}
            className="w-full h-[35px] px-4 py-2 border rounded-md"
          />
        </div>
        <div className="w-1/2">
          <label className="block text-sm font-medium text-gray-700">City</label>
          <input
            type="text"
            name="city"
            placeholder="Enter your city"
            value={formData.city}
            onChange={handleInputChange}
            className="w-full h-[35px] px-4 py-2 border rounded-md"
          />
        </div>
      </div>

      {/* Address */}
      <div className="w-full">
        <label className="block text-sm font-medium text-gray-700">Address</label>
        <input
          type="text"
          name="address"
          placeholder="Enter your address"
          value={formData.address}
          onChange={handleInputChange}
          className="w-full h-[35px] px-4 py-2 border rounded-md"
        />
      </div>

      {/* District and Postal Code */}
      <div className="flex space-x-4">
        <div className="w-1/2">
          <label className="block text-sm font-medium text-gray-700">District</label>
          <input
            type="text"
            name="district"
            placeholder="Enter your district"
            value={formData.district}
            onChange={handleInputChange}
            className="w-full h-[35px] px-4 py-2 border rounded-md"
          />
        </div>
        <div className="w-1/2">
          <label className="block text-sm font-medium text-gray-700">Postal Code</label>
          <input
            type="text"
            name="postalCode"
            placeholder="Enter your postal code"
            value={formData.postalCode}
            onChange={handleInputChange}
            className="w-full h-[35px] px-4 py-2 border rounded-md"
          />
        </div>
      </div>

      {/* Submit Button */}
      <button
        onClick={handleSubmit}
        className="px-4 py-2 bg-green-500 text-white rounded-md mt-4"
      >
        {hasEnteredInfo ? 'Update' : 'Save'}
      </button>
    </div>
  );
};

export default EditUserInfoForm;
