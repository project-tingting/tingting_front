import React from 'react';
import axios from 'axios';
import Button from '../components/Button';
import UserInput from '../components/UserInput';
import ProgressBar from '../components/ProgressBar';
import Top from '../components/Top';

interface User {
  id: string;
  pw: string;
}

export default function index() {
  login('minyoung', '1234');
  return (
    <>
      <div>
        <Top text="회원가입"></Top>
        <UserInput type="email" size="big" text="아이디" />
        <UserInput type="password" size="big" text="비밀번호" />
        <ProgressBar />
        <Button text="계속하기" isRound={false} disabled={false}></Button>
      </div>
    </>
  );
}

export const login = async (id: string, pw: string): Promise<User> => {
  // const user = {
  //   id: id,
  //   pw: pw,
  // };
  const res = await axios.post('/', { id: id, pw: pw });
  localStorage.setItem('user', res.data);
  console.log(res);
  // localStorage.setItem('id', res.data);
  // localStorage.setItem('pw', res.data.pw);

  return res.data;
};
