import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    :root {
        // COLORS
        --primary-color: #1B31A8;
        --white-color: #FFFFFF;
        --light-grey-color: #F4F8FA;

        // FONT
        --default-font-family: 'Work Sans';
        --backup-font-family: sans-serif;
        --sm-font-size: 18px;
        --md-font-size: 20px;
        --light-font-weight: 400;
        --normal-font-weight: 500;
        --semibold-font-weight: 600;

        //LINE HEIGHT
        --sm-line-height: 22px;
        --md-line-height: 24px;
    }

    body {
        margin: 0;
        font-family: var(--default-font-family), var(--backup-font-family);
    }

    main {
        background-color: var(--light-grey-color);
    }

    code, html {
        font-family: var(--default-font-family), var(--backup-font-family);
    }
    
    * {
        box-sizing: border-box;
    }
`;

export default GlobalStyle;
