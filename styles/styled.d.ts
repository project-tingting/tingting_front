import { Theme } from './theme';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {
    colors: {
      mainColor: string;
      textColor: string;
      bgColor: string;
      inputColor: string;
      disabledColor: string;
      enabledColor: string;
      redColor: string;
    };
  }
}
