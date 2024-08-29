import { useMutation } from '@tanstack/react-query';
import { createUser } from './api';

import { createUserType } from './types';

export function useCreateUser() {
  return useMutation({
    mutationFn: (body: createUserType) => createUser(body),
  });
}
