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
      whiteColor: string;
      blackColor: string;
      redColor: string;
    };
    size: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
    a11yHidden: CSSobject;
    TextShortening: CSSobject;
    ScrollbarStyle: CSSobject;
  }
}
