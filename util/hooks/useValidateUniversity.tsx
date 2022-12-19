import { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { userInfoState } from '../../core/recoil/userInfoAtom';
import { useQuery } from '@tanstack/react-query';

import { userAPI } from '../../core/api/baseInstance';

const checkValidation = async (schoolEmail: string) => {
  try {
    const res = await userAPI(`/confirmcheck/${schoolEmail}`);
    return res;
  } catch (error) {
    console.error(error);
  }
};

export default function useValidateUniversity(schoolEmail: string) {
  const [isClickValidateButton, setIsClickValidateButton] = useState(false);
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);

  useEffect(() => {
    setUserInfo({ ...userInfo, userEmail: schoolEmail, university: '' });
  }, [schoolEmail]);

  const handleClickValidateButton = async () => {
    setIsClickValidateButton(true);
    try {
      const res = await userAPI.post('/signup', {
        ...userInfo,
      });
      console.log(res);
    } catch (error) {
      setIsClickValidateButton(false);
      console.error(error);
    }
  };

  const { data } = useQuery(['confirmcheck', schoolEmail], () => checkValidation(schoolEmail), {
    enabled: !!isClickValidateButton,
    refetchOnWindowFocus: 'always',
  });
  return { handleClickValidateButton, data, isClickValidateButton };
}
