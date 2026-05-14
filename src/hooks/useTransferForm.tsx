import React, { useState } from 'react';
import { FormType } from '../utils/transfer.map';

export const useFormHook = () => {
  const initialData = {
    accountName: '',
    accountNumber: '',
    bankName: '',
  };

  type FormField = keyof typeof initialData;

  const [formData, setFormData] = useState<FormType>(initialData);
  const [blurred, setBlurred] = useState<Partial<Record<FormField, boolean>>>(
    {},
  );
  const [error, setError] = useState<Partial<Record<FormField, string>>>({});

  const handleChange: (field: FormField, value: string) => void = (
    field: FormField,
    value: string,
  ) =>
    setFormData(prev => ({
      ...prev,
      [field]: value,
    }));

  const handleBlurred = (field: FormField) => {
    setBlurred(prev => ({
      ...prev,
      [field]: true,
    }));
  };

  const validateForm = () => {
    let isValid = true;

    Object.keys(formData).forEach(field => {
      const value = formData[field as keyof typeof formData];
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
