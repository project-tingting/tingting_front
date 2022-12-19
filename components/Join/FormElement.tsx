import styled, { css } from 'styled-components';

type InputProps = {
  sizing: string;
  isIdValid?: boolean;
  isPasswordValid?: boolean;
  classname?: string;
};

export const StyledInput = styled.input<InputProps>`
  ${(props) =>
    props.sizing === 'large'
      ? css`
          height: 5.6rem;
          border-radius: 2rem;
          padding: 1.2rem 0 1.1rem 1.2rem;
          background-color: ${({ theme }) => theme.colors.inputColor};
          color: #a7a7a7;
        `
      : css`
          height: 4.8rem;
          border-radius: 1rem;
          padding: 1rem 0 0.9rem 1.6rem;
          color: #646464;
          background-color: #dedede;
        `}
  width: 100%;
  border: none;
  line-height: 3.3rem;
  font-size: 1.8rem;

  &:focus {
    outline: none;
    border: 0.2rem solid ${({ theme }) => theme.colors.mainColor};
  }

  &.error {
    border: 0.2rem solid ${({ theme }) => theme.colors.inputErrorColor};
  }
`;

export const ValidateButton = styled.button`
  width: 59px;
  border-radius: 1.25rem;
  background-color: ${({ theme }) => theme.colors.mainColor};
  color: ${({ theme }) => theme.colors.whiteColor};
  font-size: 1.25rem;
  line-height: 1.5rem;
`;
