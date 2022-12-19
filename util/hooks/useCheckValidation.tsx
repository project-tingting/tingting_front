import { userAPI } from '../../core/api/baseInstance';
import { useQuery } from '@tanstack/react-query';

export default function useCheckValidation(userEmail: string) {
  const checkValidation = async () => {
    try {
      const res = await userAPI(`/confirmcheck/${userEmail}`);
      return res;
    } catch (error) {
      console.error(error);
    }
  };
  const { data } = useQuery(['confirmcheck'], () => checkValidation(), {
    refetchOnWindowFocus: 'always',
  });
  return { data };
}
