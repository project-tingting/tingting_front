import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    ${reset}
    html {
        font-size: 62.5%;
        font-family: 'Pretendard';
        color: ${({ theme }) => theme.colors.textColor};
        background-color: ${({ theme }) => theme.colors.bgColor};
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
        background-color: ${({ theme }) => theme.colors.inputColor};
        outline: 0;
        &::placeholder {
            color: ${({ theme }) => theme.colors.inputTextColor};
        }
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
