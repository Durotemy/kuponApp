type FormType = {
  accountName: string;
  accountNumber: string;
  bankName: string;
};

type SharedProps = {
  formData: FormType;
  setFormData: React.Dispatch<React.SetStateAction<FormType>>;
};

export type AppStackParamList = {
  home: undefined;
  Dashboard?: undefined;
  self: {
    formData: FormType;
    setFormData: React.Dispatch<React.SetStateAction<FormType>>;
  };
  others: undefined;
};
