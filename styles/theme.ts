import { DefaultTheme } from 'styled-components';
import css from 'styled-jsx/css';

const colors = {
  mainColor: '#764AF1',
  secondaryColor: '#9772FB',
  textColor: '#404040',
  bgColor: '#F8F8F8',
  inputColor: '#EBEAED',
  inputTextColor: '#918F97',
  inputTextUserColor: '#353535',
  inputErrorColor: '#F75B77',
  buttonDisabledColor: '#867E91',
  subTitleColor: '#4C4956',
  descriptionColor: '#6B6B6B',
  whiteColor: '#FFFFFF',
  blackColor: '#000000',
};

const a11yHidden = {
  overflow: 'hidden',
  position: 'absolute',
  clip: 'rect(0, 0, 0, 0)',
  width: '1px',
  height: '1px',
  margin: '-1px',
  border: 0,
  padding: 0,
};

const size = {
  mobile: 'screen and (max-width: 768px)',
  tablet: 'screen and (max-width: 1024px)',
  desktop: 'screen and (max-width: 1200px)',
};

const TextShortening = css`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  -webkit-line-clamp: 1;
  text-overflow: ellipsis;
  word-break: break-all;
`;

const ScrollbarStyle = css`
  &::-webkit-scrollbar {
    width: '0.4rem';
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 0.2rem;
    background-color: #d9d9d9;
  }
  &::-webkit-scrollbar-button {
    width: 0;
    height: 0;
  }

  & {
    scrollbar-width: thin;
    scrollbar-color: #d9d9d9 transparent;
  }
`;

const theme: DefaultTheme = {
  colors,
  size,
  a11yHidden,
  TextShortening,
  ScrollbarStyle,
};

export default theme;
