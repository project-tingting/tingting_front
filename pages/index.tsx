import React from 'react';

import { joinAPI } from '../core/recoil/api/joinAPI';

export default function index() {
  const handleClickLoginButton = () => {
    joinAPI('yjs', '0000');
  };
  return (
    <>
      <div>home</div>
      <button onClick={handleClickLoginButton}>회원가입</button>
    </>
  );
}
