import React from 'react';
import Router from 'next/router';
import { useMutation } from '@tanstack/react-query';
import { userAPI } from '../../core/api/baseInstance';
import axios from 'axios';

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
      if (axios.isAxiosError(error)) {
        return error.response?.status;
      }
    }
  };

  const { mutate, data } = useMutation(submitLoginForm);

  return { mutate, data };
}
