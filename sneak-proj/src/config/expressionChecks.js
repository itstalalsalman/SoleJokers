const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

export const validateInputs = (email, password, setEmailError, setPasswordError) => {
    let isValid = true;

    // Email Validation
    if (email === '') {
      setEmailError({ state: true, msg: 'Please enter the email!' });
      isValid = false;
    } else if (!validateEmail(email)) {
      setEmailError({ state: true, msg: 'Please enter a valid email!' });
      isValid = false;
    } else {
      setEmailError({ state: false, msg: '' });
    }

    // Password Validation
    if (password === '') {
      setPasswordError({ state: true, msg: 'Please enter the password!' });
      isValid = false;
    } else {
      setPasswordError({ state: false, msg: '' });
    }

    return isValid;
};