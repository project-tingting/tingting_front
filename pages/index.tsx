import React from 'react';
import Button from '../components/Button';

import UserInput from '../components/UserInput';

export default function index() {
  return (
    <>
      <div>
        <UserInput type="password" size="big" text="비밀번호" />
        <Button text="계속하기" isRound={false} disabled={false}></Button>
      </div>
    </>
  );
}
