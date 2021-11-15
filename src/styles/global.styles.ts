import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    :root {
        // COLORS
        --primary-color: #1B31A8;
        --blue-gray-50-color: #E9EEF2;
        --blue-gray-100-color: #CBD5DC;
        --blue-gray-400-color: #708797;
        --blue-gray-600-color: #4D6475;
        --blue-gray-900-color: #1E2A32;
        --white-color: #FFFFFF;
        --grey-background-color: #F4F8FA;

        // FONT
        --default-font-family: 'Work Sans';
        --backup-font-family: sans-serif;
        --currency-font-family: Rubik;
        --xxxs-font-size: 12px;
        --xxs-font-size: 14px;
        --xs-font-size: 16px;
        --sm-font-size: 18px;
        --md-font-size: 20px;
        --lg-font-size: 24px;
        --light-font-weight: 400;
        --normal-font-weight: 500;
        --semibold-font-weight: 600;

        //LINE HEIGHT
        --xxs-line-height: 18px;
        --xs-line-height: 20px;
        --sm-line-height: 22px;
        --md-line-height: 24px;
        --lg-line-height: 28px;
    }

    body {
        margin: 0;
        font-family: var(--default-font-family), var(--backup-font-family);
    }

    button {
        cursor: pointer;
    }

    main {
        background-color: var(--grey-background-color);
    }

    code, html {
        font-family: var(--default-font-family), var(--backup-font-family);
    }
    
    * {
        box-sizing: border-box;
    }
`;

export default GlobalStyle;
