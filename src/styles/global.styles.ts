import styled, { createGlobalStyle } from 'styled-components';

export const SMALL_DEVICE_BREAKPOINT = 768;

const GlobalStyle = createGlobalStyle`
    :root {
        // COLORS
        --primary-color: #1B31A8;
        --secondary-color: #0079FF;
        --blue-gray-10-color: #F4F8FA;
        --blue-gray-50-color: #E9EEF2;
        --blue-gray-100-color: #CBD5DC;
        --blue-gray-300-color: #8A9CA9;
        --blue-gray-400-color: #708797;
        --blue-gray-600-color: #4D6475;
        --blue-gray-900-color: #1E2A32;
        --white-color: #FFFFFF;

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
        --xlg-font-size: 32px;
        --light-font-weight: 400;
        --normal-font-weight: 500;
        --semibold-font-weight: 600;

        //LINE HEIGHT
        --xxxs-line-height: 16px;
        --xxs-line-height: 18px;
        --xs-line-height: 20px;
        --sm-line-height: 22px;
        --md-line-height: 24px;
        --lg-line-height: 28px;
        --xl-line-height: 38px;
    }

    body {
        margin: 0;
        font-family: var(--default-font-family), var(--backup-font-family);
    }

    button {
        cursor: pointer;
    }

    strong {
        font-weight: var(--semibold-font-weight);
    }

    main {
        background-color: var(--blue-gray-10-color);
    }

    code, html {
        font-family: var(--default-font-family), var(--backup-font-family);
    }
    
    * {
        box-sizing: border-box;
    }
`;

export const InputLabel = styled.label`
  font-size: var(--xxxs-font-size);
  line-height: var(--xxs-line-height);
  font-weight: var(--light-font-weight);
  color: var(--blue-gray-900-color);
  
  @media (min-width: ${SMALL_DEVICE_BREAKPOINT}px) {
    font-size: var(--xxs-font-size);
    line-height: var(--sm-line-height):
    }
`;

export const InputContainer = styled.div`
  display: flex;
  border-radius: 4px;
  font-size: var(--md-font-size);
  border: 1px solid var(--blue-gray-50-color);

  @media (min-width: ${SMALL_DEVICE_BREAKPOINT}px) {
    font-size: var(--lg-font-size);
    width: 100%;
  }
`;

export default GlobalStyle;
