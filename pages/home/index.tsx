import React, { useEffect } from 'react';
import { useGetUserInfo, useGetNewToken } from '../../core/apiHooks/user';

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
  const refreshToken = typeof window !== 'undefined' ? localStorage.getItem('refreshToken') : null;
  const { mutate: handleRegenerateToken } = useGetNewToken(refreshToken);

  useEffect(() => {
    handleRegenerateToken();
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
