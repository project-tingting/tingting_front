import React from 'react';
import Button from '../components/Button';

import UserInput from '../components/UserInput';
import ProgressBar from '../components/ProgressBar';

export default function index() {
  return (
    <>
      <div>
        <UserInput type="password" size="big" text="비밀번호" />
<<<<<<< HEAD
        <ProgressBar />
=======
        <Button text="계속하기" isRound={false} disabled={false}></Button>
>>>>>>> 30636b2048a82f63faca061f9376ed7936ed1554
      </div>
    </>
  );
}
