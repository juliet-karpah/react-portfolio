import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root {
        --color-primary-main: #d14334;
        --color-primary-variant-dark: #a7362a;
        --color-primary-variant-light: #DA695D;
        --color-secondary-main: #028f76;
        --color-secondary-variant-dark: #015647;
        --color-light-gray: #D3D3D3;
        --color-grey-100: #f3f4f6;
        --color-grey-400: #9ca3af;
        --color-grey-500: #6b7280;
        --color-grey-600: #4b5563;
        --color-grey-700: #374151;
        --color-white: #FFFFFF;
        --shadow-sm:  0.5rem 0.5rem 0.5rem 0.5rem white;
        --shadow-md:  1rem 1rem 1rem 1rem #F2F3F5;
        --shadow-lg:  2rem 2rem 2rem 2rem gray;
        --border-radius-sm: 3px;
        --border-radius-md: 5px;
        --border-radius-lg: 7px;
        --border-radius-avatar: 50%;
    }

    body {
        font-family: 'Roboto Slab', serif;
    }

    svg{
        width: 1rem;
    }

    tr, th, td {
        height: 50px;
    }
`;
