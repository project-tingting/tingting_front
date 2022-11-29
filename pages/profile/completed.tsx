import Router from 'next/router';
import React, { useEffect } from 'react';
import Notice from '../../components/Notice';

export default function completed() {
  useEffect(() => {
    setTimeout(() => {
      Router.push('/profile/alcohol'); // 메인페이지로 바꾸기
    }, 2000);
  }, []);
  return <Notice message="프로필 설정이 완료되었습니다!"></Notice>;
}
