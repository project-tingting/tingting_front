import { createGlobalStyle } from 'styled-components';
import theme from './theme';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    ${reset}
    html {
        font-size: 62.5%;
        color: ${theme.colors.mainColor};
        font-family: Pretendard Variable;
        background-color: ${theme.colors.bgColor};
    }

    * {
        box-sizing: border-box;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    input, button{
        font-family: inherit;
        font-size: inherit;
    }
    input{
        background-color: ${theme.colors.inputColor};
    }
    button{
        cursor: pointer;
        border: 0rem;
    }
    img{
        vertical-align: top;
    }
`;

export default GlobalStyle;
