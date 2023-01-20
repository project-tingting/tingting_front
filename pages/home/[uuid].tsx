import React, { useEffect } from 'react';
import Router from 'next/router';
import { useGetUserInfo } from '../../core/apiHooks/user';

import TopNavigation from '../../components/Home/TopNavigation';
import Banner from '../../components/Home/Banner';
import Func from '../../components/Home/Func';
import BottomNavigation from '../../components/Home/BottomNavigation';
import Party from '../../components/Home/Party';
import PartyNum from '../../components/Home/PartyNum';

export default function Home() {
  const { data: userInfo } = useGetUserInfo();
  useEffect(() => {
    if (!localStorage.getItem('access-token')) {
      alert('로그인이 필요합니다!');
      Router.push('/');
    }
  }, []);
  return (
    <>
      <TopNavigation tokenNum={userInfo?.data.data.tingTingToken} />
      <Banner />
      <Party />
      <PartyNum />
      <Func />
      <BottomNavigation />
    </>
  );
}
