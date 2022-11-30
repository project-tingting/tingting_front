import React from 'react';
import EditProfile from '../components/Home/EditProfile';

export default function index() {
  const handleClickLoginButton = () => {
    // console.log('hi');
  };
  return (
    <>
      <div>home</div>
      <button onClick={() => handleClickLoginButton()}>회원가입</button>
      <EditProfile></EditProfile>
    </>
  );
}
