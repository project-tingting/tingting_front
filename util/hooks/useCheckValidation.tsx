import { userAPI } from '../../core/api/baseInstance';
import { useQuery } from '@tanstack/react-query';

const checkValidation = async (userEmail: string) => {
  try {
    const res = await userAPI(`/confirmcheck/${userEmail}`);
    console.log(res);
  } catch (error) {
    console.error(error);
  }
};

export default function useCheckValidation(userEmail: string) {
  const { data } = useQuery(['confirmcheck'], () => checkValidation(userEmail), {
    refetchOnWindowFocus: 'always',
  });
  return { data };
}
