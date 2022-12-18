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
    setGender('m');
  };

  const handleClickFemaleButton = () => {
    setGender('w');
  };

  return { gender, handleClickMaleButton, handleClickFemaleButton };
}
