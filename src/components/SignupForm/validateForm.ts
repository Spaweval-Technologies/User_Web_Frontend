import UserDetails from './index.d';

/**
 * validateForm function to validate user details during signup
 * @param {UserDetails} userDetails - The user details to validate
 * @returns {{ valid: boolean; message: string }} - Validation result with message
 */
const validateForm = (userDetails: UserDetails): { valid: boolean; message: string } => {
  const { email, firstName, lastName, password, mobile_number } = userDetails;

  if (!firstName || !lastName) {
    return { valid: false, message: 'Name required' };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    return { valid: false, message: 'Invalid email format.' };
  }

  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/;
  if (!password || !passwordRegex.test(password)) {
    return {
      valid: false,
      message:
        'Password must be at least 8 characters long and include at least one letter and one number.',
    };
  }

  const mobileRegex = /^\d{8,}$/;
  if (!mobile_number || !mobileRegex.test(mobile_number)) {
    return {
      valid: false,
      message: 'Mobile number must be more than 8 digits long.',
    };
  }

  return { valid: true, message: 'Validation successful.' };
};

export default validateForm;
