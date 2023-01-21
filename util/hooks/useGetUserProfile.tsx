import { useQuery } from '@tanstack/react-query';
import { getUserProfile } from '../../core/api/userProfile';

export const useGetUserProfile = () => {
  const { data, refetch } = useQuery({
    queryKey: ['userProfile'],
    queryFn: () => {
      return getUserProfile();
    },
  });
  return { data, refetch };
};
