import css from 'styled-jsx/css';

const colors = {
  mainColor: '#5E5E5E',
  textColor: '#404040',
  bgColor: '#F8F8F8',
  inputColor: '#EFEFEF',
  disabledColor: '#B7B7B7',
  enabledColor: '#424242',
  whiteColor: '#FFFFFF',
  blackColor: '#000000',
  redColor: 'red',
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

const theme = {
  colors,
  size,
  a11yHidden,
  TextShortening,
  ScrollbarStyle,
};

export default theme;
