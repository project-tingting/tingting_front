import React, { useEffect } from 'react';

import { usePostProfile } from '../../components/Profile/apiHooks/profile';
import InputContainer from '../../components/common/AnimationContainer';
import Notice from '../../components/common/Notice';
import { useRecoilValue } from 'recoil';
import { userProfileState } from '../../core/recoil/userProfileAtom';

export default function completed() {
  const userProfile = useRecoilValue(userProfileState);
  const { mutate: postProfileMutate } = usePostProfile();

  useEffect(() => postProfileMutate(userProfile), []);

  return (
    <InputContainer>
      <Notice message="프로필 설정이 완료되었습니다!"></Notice>
    </InputContainer>
  );
}
