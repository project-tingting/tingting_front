import Router from 'next/router';
import React, { useEffect } from 'react';
import InputContainer from '../../components/AnimationContainer';
import Notice from '../../components/Notice';
import { usePostProfile } from '../../util/hooks/usePostProfile';

export default function completed() {
  const { mutate } = usePostProfile({
    onError: () => {
      console.log('error');
    },
    onSuccess: (data) => {
      console.log(data);
    },
  });

  useEffect(() => {
    mutate();
  }, []);

  return (
    <InputContainer>
      <Notice message="프로필 설정이 완료되었습니다!"></Notice>
    </InputContainer>
  );
}
