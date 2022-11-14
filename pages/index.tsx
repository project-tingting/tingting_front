import React from 'react';

import UserInput from '../components/UserInput';
import ProgressBar from '../components/ProgressBar';

export default function index() {
  return (
    <>
      <div>
        <UserInput type="password" size="big" text="비밀번호" />
        <ProgressBar />
      </div>
    </>
  );
}
