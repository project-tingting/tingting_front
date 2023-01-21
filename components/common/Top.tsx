import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import Back from '../../public/assets/icons/back.svg';

interface TopTextProps {
  text: string;
}

export default function Top({ text }: TopTextProps) {
  const router = useRouter();
  const onClickBack = () => {
    router.back();
  };
  return (
    <TopComponent>
      <Back onClick={onClickBack} />
      <span>{text}</span>
    </TopComponent>
  );
}

const TopComponent = styled.header`
  padding: 0.9rem;
  color: ${({ theme }) => theme.colors.subTitleColor};
  font-weight: 600;
  font-size: 1.8rem;
  display: flex;
  align-items: center;
  & svg {
    cursor: pointer;
    margin-right: auto;
  }
  & span {
    margin: 0 auto;
  }
`;
