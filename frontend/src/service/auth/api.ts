import axios from 'axios';

import { createUserType, LoginUserType, ResetPasswordType } from './types';

const BASE_URL = 'http://localhost:5000/api/auth';
const authAxiosInstance = axios.create({ baseURL: BASE_URL });
authAxiosInstance.defaults.withCredentials = true;

export const createUser = async (body: createUserType) => {
  return await authAxiosInstance.post('signup', body);
};

export const login = async (body: LoginUserType) => {
  return await authAxiosInstance.post('login', body);
};

export const verifyEmail = async (body: string) => {
  return await authAxiosInstance.post('verify-email', { code: body });
};

export const forgotPassword = async (body: string) => {
  return await authAxiosInstance.post('forgot-password', { email: body });
};

export const resetPassword = async (body: ResetPasswordType) => {
  return await authAxiosInstance.post(`reset-password/${body.token}`, { password: body.password });
};

export const checkAuth = async () => {
  return await authAxiosInstance.get('check-auth');
};
