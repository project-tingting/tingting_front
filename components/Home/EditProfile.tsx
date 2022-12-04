import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import EditAlcohol from './EditAlcohol';
import EditInterest from './EditInterest';
import EditMbti from './EditMbti';

export default function EditProfile() {
  const [tab, setTab] = useState(0);
  const editList = ['MBTI', '술선호', '관심사'];

  const handleTab = (index) => {
    setTab(index);
  };

  return (
    <Wrapper>
      <NavUl>
        {editList.map((list, index) => (
          <NavLi
            key={list}
            onClick={() => handleTab(index)}
            className={tab === index ? 'selected' : ''}
          >
            {list}
          </NavLi>
        ))}
      </NavUl>
      {tab === 0 && <EditMbti />}
      {tab === 1 && <EditAlcohol />}
      {tab === 2 && <EditInterest />}
      {/* {tab === 'MBTI' && <EditMbti />}
      {tab === '술선호' && <EditAlcohol />}
      {tab === '관심사' && <EditInterest />} */}
    </Wrapper>
  );
}

const Wrapper = styled.article`
  background-color: ${({ theme }) => theme.colors.whiteColor};
  border-radius: 2rem 2rem 0 0;
  padding: 4.2rem 1.9rem;
`;

const NavUl = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const NavLi = styled.li`
  font-size: 1.8rem;
  font-weight: 500;
  color: #a7abbb;
  padding: 0.8rem 3.9rem;
  border-bottom: 0.2rem solid #dee2f3;
  cursor: pointer;
  width: calc(100% / 3);
  text-align: center;
  &.selected {
    color: #161b27;
    border-bottom: 0.2rem solid ${({ theme }) => theme.colors.mainColor};
  }
`;
