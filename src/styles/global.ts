import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus {
        outline: 0;
    }

    body {
        -webkit-font-smoothing: antialiased;
        background: ${(props) => props.theme.colors.background};
    }
    
    body, input, textarea, button {
        font-family: 'Heebo', monospace;
        font-weight: 400;   
        line-height: 0.625rem;
        color: ${(props) => props.theme.colors.text};
    }
`
