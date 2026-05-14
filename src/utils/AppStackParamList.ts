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
  self: {
    formData: FormType;
    setFormData: React.Dispatch<React.SetStateAction<FormType>>;
  };
  others: undefined;
};
