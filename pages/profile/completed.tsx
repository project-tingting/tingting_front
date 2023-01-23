import React from 'react';

import InputContainer from '../../components/common/AnimationContainer';
import Notice from '../../components/common/Notice';

export default function completed() {
  return (
    <InputContainer>
      <Notice message="프로필 설정이 완료되었습니다!"></Notice>
    </InputContainer>
  );
}
