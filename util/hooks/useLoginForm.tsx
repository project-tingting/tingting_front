import React from 'react';
import Router from 'next/router';
import axios from 'axios';

export default function useLoginForm(userId: string, password: string) {
  const loginNGoMain = (accessToken: string) => {
    localStorage.setItem('access-token', accessToken);
    Router.push('/main');
  };
  const submitLoginForm = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await axios.post('/account/login', {
        userId: userId,
        password: password,
      });
      loginNGoMain(res.data.data.token);
    } catch (error) {
      console.error(error);
    }
  };
  return { submitLoginForm };
}
