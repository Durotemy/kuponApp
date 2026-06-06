import { useState } from 'react';
import { LoginForm } from '../type/types';

export const useLoginHook = () => {
  const initialData = {
    email: '',
    password: '',
  };
  type loginTypes = keyof typeof initialData;

  const [formData, setFormData] = useState<LoginForm>(initialData);
  const [blurred, setBlurred] = useState<Record<loginTypes, boolean>>({
    email: false,
    password: false,
  });
  const [error, setError] = useState<Record<loginTypes, string>>({
    email: '',
    password: '',
  });

  const handleChange = (field: loginTypes, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleBlurred = (field: loginTypes) => {
    setBlurred(prev => ({
      ...prev,
      [field]: true,
    }));
  };

  const validateForm = () => {
    let isValid = true;

    Object.keys(formData).forEach(field => {
      const value = formData[field as loginTypes];
      if (value.trim() == '') {
        setError(prev => ({
          ...prev,
          [field]: `${field} cannot be empty`,
        }));
        isValid = false;
      } else if (
        field === 'email' &&
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
      ) {
        setError(prev => ({
          ...prev,
          [field]: `${field} Invalid email address`,
        }));
        isValid = false;
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
    handleBlurred,
    blurred,
    error,
    formData,
    validateForm,
    setFormData,
  };
};
