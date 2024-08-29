import { useMutation } from '@tanstack/react-query';
import { useNavigate } from '@tanstack/react-router';

import { createUser } from './api';

import { createUserType } from './types';

export function useCreateUser() {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: (body: createUserType) => createUser(body),
    onSuccess: () => {
      navigate({ to: '/verify-email' });
    },
  });
}
