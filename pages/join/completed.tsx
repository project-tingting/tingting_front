import Router from 'next/router';
import useGetAccessToken from '../../util/hooks/useGetAccessToken';
import React, { useEffect } from 'react';
import Notice from '../../components/common/Notice';

export default function completed() {
  const { mutate: getAccessToken } = useGetAccessToken();
  useEffect(() => {
    getAccessToken();
    setTimeout(() => {
      Router.push('/profile');
    }, 2000);
  }, []);
  return <Notice message="팅팅에 가입되었어요!"></Notice>;
}
