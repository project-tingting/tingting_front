import Image from 'next/image';
import React from 'react';
import styled, { css } from 'styled-components';
import refresh from '../../../public/assets/icons/refresh.svg';
import disabledRefresh from '../../../public/assets/icons/disabledRefresh.svg';
import { usePutUserProfile } from '../../../util/hooks/usePutUserProfile';

interface SaveButtonProps {
  disabled?: boolean;
}

export default function SaveButton({ disabled }: SaveButtonProps) {
  const { data, mutate } = usePutUserProfile();
  const handleSaveProfile = () => {
    mutate();
    console.log(data);
  };
  return (
    <Container>
      <StyledSaveButton disabled={disabled} onClick={handleSaveProfile}>
        현재상태 저장
        {disabled ? <Image src={disabledRefresh} /> : <Image src={refresh} />}
      </StyledSaveButton>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledSaveButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  color: ${({ theme }) => theme.colors.mainColor};
  font-size: 2rem;
  font-weight: 500;
  line-height: 150%;
  border: 0.1rem solid ${({ theme }) => theme.colors.mainColor};
  border-radius: 10rem;
  background-color: ${({ theme }) => theme.colors.whiteColor};
  padding: 0.8rem 1.6rem;
  ${(props) =>
    props.disabled &&
    css`
      color: #827397;
      border: 0.1rem solid #827397;
    `};
`;
