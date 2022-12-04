import React from 'react';

import TopNavigation from '../../components/home/TopNavigation';
import Banner from '../../components/home/Banner';
import Party from '../../components/home/Party';
import Func from '../../components/home/Func';
import BottomNavigation from '../../components/home/BottomNavigation';

export default function Home() {
  return (
    <>
      <TopNavigation />
      <Banner />
      <Party />
      <Func />
      <BottomNavigation />
    </>
  );
}
