import { userAPI } from '../../core/api/baseInstance';
import { RegisterProps } from '../../types/user';

export default function useValidateUniversity(userInfo: RegisterProps) {
  const handleClickValidateButton = async () => {
    try {
      const res = await userAPI.post('/signup', {
        ...userInfo,
      });
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  };
  return { handleClickValidateButton };
}
