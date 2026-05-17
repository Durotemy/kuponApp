import { useState } from 'react';
import { formDataType } from '../type/types';

export const useOnboardingHoook = () => {
  const initialData = {
    fullName: '',
    emailAddress: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
  };

  type onboardingDataType = keyof typeof initialData;
  const [formData, setFormData] = useState<formDataType>(initialData);
  const [blurred, setBlurred] = useState<Record<onboardingDataType, boolean>>({
    fullName: false,
    emailAddress: false,
    phoneNumber: false,
    password: false,
    confirmPassword: false,
  });
  const [error, setError] =
    useState<Record<onboardingDataType, string>>(initialData);

  const handleChange: (field: onboardingDataType, value: string) => void = (
    field: onboardingDataType,
    value: string,
  ) =>
    setFormData(prev => ({
      ...prev,
      [field]: value,
    }));

  const handleBlurred = (field: onboardingDataType) => {
    setBlurred(prev => ({
      ...prev,
      [field]: true,
    }));
  };

  const validateForm = () => {
    let isValid = true;

    Object.keys(formData).forEach(field => {
      const value = formData[field as onboardingDataType];
      if (value.trim() == '') {
        setError(prev => ({
          ...prev,
          [field]: `${field} cannot be empty`,
        }));
        isValid = false;
      } else if (field === 'email' && !value.includes('@')) {
        setError(prev => ({
          ...prev,
          [field]: `${field} Invalid email address`,
        }));
      } else {
        setError(prev => ({
          ...prev,
          [field]: '',
        }));
      }
    });

    return isValid;
  };

  return {
    handleChange,
    value: formData,
    setFormData,
    formData,
    handleBlurred,
    blurred,
    error,
    validateForm,
  };
};
