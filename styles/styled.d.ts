import { Theme } from './theme';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {
    colors: {
      mainColor: string;
      secondaryColor: string;
      textColor: string;
      bgColor: string;
      inputColor: string;
      inputTextColor: string;
      inputTextUserColor: string;
      inputErrorColor: string;
      buttonDisabledColor: string;
      subTitleColor: string;
      descriptionColor: string;
      whiteColor: string;
      blackColor: string;
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
