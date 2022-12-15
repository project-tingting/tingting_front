import styled from "styled-components";

export const LoginInput = styled.input`
  background: ${({ theme }) => theme.colors.inputColor};
  border-radius: 10px;
  padding: 10px 16px 9px;
  width: 100%;
  font-size: 24px;
  line-height: 29px;
  color: ${({ theme }) => theme.colors.inputTextColor};
`