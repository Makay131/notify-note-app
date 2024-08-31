import axios from 'axios';

import { createUserType, LoginUserType } from './types';

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
