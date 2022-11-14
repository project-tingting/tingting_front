import React from 'react';

import UserInput from '../components/UserInput';

export default function index() {
  return (
    <>
      <div>
        <UserInput type="password" size="big" text="비밀번호" />
      </div>
    </>
  );
}
