import React from 'react';

import Top from '../../components/common/Top';
import ProgressBar from '../../components/common/ProgressBar';

export default function test() {
  return (
    <>
      <Top text="캐릭터 유형" />
      <ProgressBar stage={1} total={6} />
    </>
  );
}
