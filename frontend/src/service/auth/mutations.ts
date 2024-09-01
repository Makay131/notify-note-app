import { useMutation } from '@tanstack/react-query';
import { useNavigate } from '@tanstack/react-router';

import { createUser, login, verifyEmail, forgotPassword, resetPassword } from './api';

import { createUserType, LoginUserType, ResetPasswordType } from './types';

export function useCreateUser() {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: (body: createUserType) => createUser(body),
    onSuccess: () => {
      navigate({ to: '/verify-email' });
    },
  });
}

export function useLogUserIn() {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: (body: LoginUserType) => login(body),
    onSuccess: () => {
      navigate({ to: '/' });
    },
  });
}

export function useVerifyEmail() {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: (code: string) => verifyEmail(code),
    onSuccess: () => {
      navigate({ to: '/' });
    },
  });
}

export function useForgotPassword() {
  return useMutation({
    mutationFn: (email: string) => forgotPassword(email),
    onSuccess: () => {},
  });
}

export function useResetPassword() {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: (body: ResetPasswordType) => resetPassword(body),
    onSuccess: () => {
      navigate({ to: '/login' });
    },
  });
}
