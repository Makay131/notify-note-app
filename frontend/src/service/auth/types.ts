export type createUserType = {
  email: string;
  password: string;
  name: string;
};

export type ResetPasswordType = {
  token: string;
  password: string;
};

export type LoginUserType = Omit<createUserType, 'name'>;
