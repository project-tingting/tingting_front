import { userAPI } from '../../core/api/baseInstance';
import { useMutation } from '@tanstack/react-query';
import { useRecoilValue } from 'recoil';
import { userInfoState } from '../../core/recoil/userInfoAtom';

export default function useGetAccessToken() {
  const userInfo = useRecoilValue(userInfoState);

  const getAccessToken = async () => {
    try {
      const res = await userAPI.post('/login', {
        userId: userInfo.userId,
        password: userInfo.password,
      });
      localStorage.setItem('access-token', res.data.data.accessToken);
      return res;
    } catch (error) {
      console.error(error);
    }
  };

  const { mutate } = useMutation(getAccessToken);

  return { mutate };
}
