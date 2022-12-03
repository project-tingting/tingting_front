import { userAPI } from '../../core/api/baseInstance';

export default function useCheckValidation(userEmail: string) {
  const checkValidation = async () => {
    try {
      const res = await userAPI(`/confirmcheck/${userEmail}`);
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  };
  return { checkValidation };
}
