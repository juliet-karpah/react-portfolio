import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root {
        --color-primary-main: #d14334;
        --color-primary-variant-dark: #a7362a;
        --color-secondary-main: #028f76;
        --color-secondary-variant-dark: #015647;
        --shadow-sm:  0.5rem 0.5rem 0.5rem 0.5rem white;
        --shadow-md:  1rem 1rem 1rem 1rem #F2F3F5;
        --shadow-lg:  2rem 2rem 2rem 2rem gray;
        --border-radius-sm: 3px;
        --border-radius-md: 5px;
        --border-radius-lg: 7px;
    }

    body {
        font-family: 'Roboto Slab', serif;
    }
`;
