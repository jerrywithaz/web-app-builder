import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    html,
    body {
        height: 100%;
        width: 100%;
    }
    body {
        margin: 0px;
    }
    #root {
        height: 100%;
        width: 100%;
    }
`;

export default GlobalStyles;