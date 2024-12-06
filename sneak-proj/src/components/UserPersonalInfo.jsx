import React from 'react'

const UserPersonalInfo = ({formData}) => {
    const headingStyle = `font-semibold text-[18px]`;
    const outputDivStyles = `flex flex-col justify-start items-start`;
    const outputStyle = `text-[16px]`;
    console.log(formData.address)

  return (
        <div className='w-full flex flex-col justify-start items-start gap-2'>
            <div className={outputDivStyles}>
              <h5 className={headingStyle}>Name</h5>
              <p className={outputStyle}>{formData.name}</p>
            </div>
            <div className={outputDivStyles}>
              <h5 className={headingStyle}>Suraname</h5>
              <p className={outputStyle}>{formData.surname}</p>
            </div>
            <div className={outputDivStyles}>
              <h5 className={headingStyle}>Country</h5>
              <p className={outputStyle}>{formData.country}</p>
            </div>
            <div className={outputDivStyles}>
              <h5 className={headingStyle}>City</h5>
              <p className={outputStyle}>{formData.city}</p>
            </div>
            <div className={outputDivStyles}>
              <h5 className={headingStyle}>District</h5>
              <p className={outputStyle}>{formData.district}</p>
            </div>
            <div className={outputDivStyles}>
              <h5 className={headingStyle}>Address</h5>
              <p className={outputStyle}>{formData.address}</p>
            </div>
            <div className={outputDivStyles}>
              <h5 className={headingStyle}>Postal Code</h5>
              <p className={outputStyle}>{formData.postalCode}</p>
            </div>
        </div>
  )
}

export default UserPersonalInfo