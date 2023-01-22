import React, { useEffect } from 'react';
import InputContainer from '../../components/AnimationContainer';
import Notice from '../../components/Notice';
import { usePostProfile } from '../../components/Profile/apiHooks/profile';

export default function completed() {
  const { mutate: postProfileMutate } = usePostProfile();

  useEffect(() => {
    postProfileMutate();
  }, []);

  return (
    <InputContainer>
      <Notice message="프로필 설정이 완료되었습니다!"></Notice>
    </InputContainer>
  );
}
