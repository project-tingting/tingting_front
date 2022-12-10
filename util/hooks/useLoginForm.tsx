import React from 'react';
import Router from 'next/router';
import { userAPI } from '../../core/api/baseInstance';

export default function useLoginForm(userId: string, password: string) {
  const loginNGoMain = (accessToken: string, uuid: string) => {
    localStorage.setItem('access-token', accessToken);
    Router.push(`/home/${uuid}`);
  };

  const submitLoginForm = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await userAPI.post('/login', {
        userId: userId,
        password: password,
      });
      console.log(res.data.data.accessTokenExpirationTime);
      loginNGoMain(res.data.data.accessToken, res.data.data.uuid);
    } catch (error) {
      console.error(error);
    }
  };

  return { submitLoginForm };
}
