import React, { useEffect } from 'react';
import Router from 'next/router';

import TopNavigation from '../../components/home/TopNavigation';
import Banner from '../../components/home/Banner';
import Party from '../../components/home/Party';
import Func from '../../components/home/Func';
import BottomNavigation from '../../components/home/BottomNavigation';

export default function Home() {
  useEffect(() => {
    if (!localStorage.getItem('access-token')) {
      alert('로그인이 필요합니다!');
      Router.push('/');
    }
  }, [])
  return (
    <>
      <TopNavigation />
      <Banner />
      {/* <Party /> */}
      <Func />
      <BottomNavigation />
    </>
  );
}
