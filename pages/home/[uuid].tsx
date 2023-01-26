import React, { useEffect } from 'react';
import Router from 'next/router';
import { useGetUserInfo } from '../../core/apiHooks/user';

import TopNavigation from '../../components/Home/TopNavigation';
import Banner from '../../components/Home/Banner';
import Func from '../../components/Home/Func';
import BottomNavigation from '../../components/Home/BottomNavigation';
import AppLayout from '../../components/Layout/AppLayout';
import { FixedAppLayout } from '../../components/Layout/FixedLayout';
import HomeGuide from '../../components/Home/HomeGuide';
import PartyMember from '../../components/Home/Party/PartyMember';

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
      <AppLayout>
        <HomeGuide />
        <PartyMember />
        <Func />
      </AppLayout>
      <BottomNavigation />
    </>
  );
}

Home.Layout = FixedAppLayout;
