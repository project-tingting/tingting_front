import { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { userInfoState } from '../../core/recoil/userInfoAtom';
import { checkIdValid } from '../checkIdValid';

export default function useCheckUserInfo(userId: string, password: string) {
  const [isIdValid, setIsIdValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);

  useEffect(() => {
    checkIdValid(userId) ? setIsIdValid(true) : setIsIdValid(false);
    password.length >= 8 ? setIsPasswordValid(true) : setIsPasswordValid(false);
    setUserInfo({ ...userInfo, userId: userId, password: password });
  }, [userId, password]);

  return { isIdValid, isPasswordValid };
}
