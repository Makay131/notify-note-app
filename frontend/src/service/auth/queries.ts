import { useQuery } from '@tanstack/react-query';
import { checkAuth } from './api';

export function useUserCategories() {
  return useQuery({
    queryKey: ['categories'],
    queryFn: checkAuth,
  });
}
