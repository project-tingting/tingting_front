import { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { userInfoState } from '../../core/recoil/userInfoAtom';

export default function useHandleGender() {
  const [gender, setGender] = useState('');
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);

  useEffect(() => {
    setUserInfo({ ...userInfo, gender: gender });
  }, [gender]);

  const handleClickMaleButton = () => {
    setGender('male');
  };

  const handleClickFemaleButton = () => {
    setGender('female');
  };

  return { gender, handleClickMaleButton, handleClickFemaleButton };
}
