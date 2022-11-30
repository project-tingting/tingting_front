import React, { useState } from 'react';
import styled from 'styled-components';
import EditAlcohol from './EditAlcohol';
import EditInterest from './EditInterest';
import EditMbti from './EditMbti';

export default function EditProfile() {
  const [tab, setTab] = useState('MBTI');
  const editList = ['MBTI', '술선호', '관심사'];

  const handleTab = (list) => {
    setTab(list.list);
  };

  return (
    <Wrapper>
      <NavBar>
        <NavUl>
          {editList.map((list) => (
            <NavLi key={list} onClick={() => handleTab({ list })}>
              {list}
            </NavLi>
          ))}
        </NavUl>
      </NavBar>
      {tab === 'MBTI' && <EditMbti />}
      {tab === '술선호' && <EditAlcohol />}
      {tab === '관심사' && <EditInterest />}
    </Wrapper>
  );
}

const Wrapper = styled.article`
  height: 50vh;
  background-color: ${({ theme }) => theme.colors.whiteColor};
  border-radius: 2rem 2rem 0 0;
`;

const NavBar = styled.nav`
  display: flex;
  justify-content: center;
`;

const NavUl = styled.ul`
  display: flex;
  margin-top: 4.2rem;
`;

const NavLi = styled.li`
  font-size: 1.8rem;
  font-weight: 500;
  color: #a7abbb;
  padding: 0.8rem 3.9rem;
  border-bottom: 0.2rem solid #dee2f3;
  cursor: pointer;
  &.selected {
    color: #161b27;
    border-bottom: 0.2rem solid ${({ theme }) => theme.colors.mainColor};
  }
`;
