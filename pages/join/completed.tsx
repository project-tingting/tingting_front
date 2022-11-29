import Router from 'next/router';
import React, { useEffect } from 'react';
import Notice from '../../components/Notice';

export default function completed() {
  useEffect(() => {
    setTimeout(() => {
      Router.push('/profile');
    }, 2000);
  }, []);
  return <Notice message="팅팅에 가입되었어요!"></Notice>;
}
