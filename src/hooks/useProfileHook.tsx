import { useState } from 'react';

export const useProfileHook = () => {
  const initialData = {
    fullName: '',
    email: '',
    phoneNumber: '',
    postingAddress: '',
    pickupCity: '',
    companyName: '',
  };

  type ProfileField = keyof typeof initialData;

  const [formData, setFormData] = useState<typeof initialData>(initialData);
  const [blurred, setBlurred] = useState<Partial<Record<ProfileField, boolean>>>({});
  const [error, setError] = useState<Partial<Record<ProfileField, string>>>({});

  const handleChange: (field: ProfileField, value: string) => void = (
    field: ProfileField,
    value: string,
  ) => setFormData(prev => ({ ...prev, [field]: value }));

  const handleBlurred = (field: ProfileField) => {
    setBlurred(prev => ({ ...prev, [field]: true }));
  };

  const validateForm = () => {
    let isValid = true;

    Object.keys(formData).forEach(field => {
      const key = field as ProfileField;
      const value = (formData[key] || '').toString();

      if (value.trim() === '') {
        setError(prev => ({ ...prev, [key]: `${key} cannot be empty` }));
        isValid = false;
        return;
      }

      if (key === 'email' && !value.includes('@')) {
        setError(prev => ({ ...prev, [key]: `${key} Invalid email address` }));
        isValid = false;
        return;
      }

      // clear previous error for this field
      setError(prev => ({ ...prev, [key]: '' }));
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
