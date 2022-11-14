import React from 'react';
import Button from '../components/Button';

import UserInput from '../components/UserInput';
import ProgressBar from '../components/ProgressBar';

export default function index() {
  return (
    <>
      <div>
        <UserInput type="password" size="big" text="비밀번호" />
        <ProgressBar />
        <Button text="계속하기" isRound={false} disabled={false}></Button>
      </div>
    </>
  );
}
