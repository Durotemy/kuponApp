export type formDataType = {
  fullName: string;
  phoneNumber: string;
  emailAddress: string;
  password: string;
  confirmPassword: string;
};
export type LoginForm = {
  email: string;
  password: string;
};

export interface ContentType {
  title: string;
  text: string;
  buttonText: string;
  backgroundColor: string;
  icon: React.ComponentType<object>;
  buttonBackgroundColor: string;
  buttonColor: string;
}

export type dataType = {
  name: string;
};
