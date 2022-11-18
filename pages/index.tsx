import React from 'react';
import axios from 'axios';

interface User {
  id: string;
  pw: string;
  // nickname: string;
  // school: string;
  // sex: string;
}

export default function index() {
  const hello = {
    id: 'minyoung',
    pw: '1234',
  };
  join(hello);
  return (
    <>
      <div>home</div>
    </>
  );
}

export const join = async (user: User): Promise<User> => {
  const res = await axios.post('/', user);
  localStorage.setItem('user', res.data);
  console.log(res);
  return res.data;
};
