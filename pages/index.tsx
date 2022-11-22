import React from 'react';

export default function index() {
  const handleClickLoginButton = () => {
    // console.log('hi');
  };
  return (
    <>
      <div>home</div>
      <button onClick={() => handleClickLoginButton()}>회원가입</button>
    </>
  );
}
