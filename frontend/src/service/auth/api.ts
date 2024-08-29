import axios from 'axios';

import { createUserType } from './types';

const BASE_URL = 'http://localhost:5000/api/auth';
const authAxiosInstance = axios.create({ baseURL: BASE_URL });
authAxiosInstance.defaults.withCredentials = true;

export const createUser = async (body: createUserType) => {
  return await authAxiosInstance.post('signup', body);
};
