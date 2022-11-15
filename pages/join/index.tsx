import React from 'react';

import Top from '../../components/Top';
import ProgressBar from '../../components/ProgressBar';
import JoinForm from '../../components/Join/JoinForm';

export default function index() {
  return (
    <div>
      <Top text="회원가입" />
      <ProgressBar />
      <JoinForm />
    </div>
  );
}
