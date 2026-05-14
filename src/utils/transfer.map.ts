import { intitialData } from '../helper/transfer';

export type formData = typeof intitialData;

export type FormType = {
  accountName: string;
  accountNumber: string;
  bankName: string;
};

export type SharedProps = {
  formData: FormType;
  setFormData: React.Dispatch<React.SetStateAction<FormType>>;
  handleChange: (field: keyof FormType, value: string) => void;
  handleBlurred: (field: keyof FormType) => void;
  error: Partial<Record<keyof FormType, string>>;
  value: string;
  validateForm: () => boolean;
};
