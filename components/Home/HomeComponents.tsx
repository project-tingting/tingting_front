import styled from 'styled-components';

export const StartButton = styled.button`
  padding: 20px 40px;
  background-color: ${({ theme }) => theme.colors.mainColor};
  border-radius: 100px;
  color: ${({ theme }) => theme.colors.whiteColor};
  font-weight: 600;
  font-size: 32px;
  line-height: 38px;
  box-shadow: 0px 0px 20px #9772fb;
  width: 248px;
`;
