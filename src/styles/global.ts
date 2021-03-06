import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

    :root{
        --background: #9561ED;
        --bg-button: #A678F5;
        --title: #FFFFFF;
        --title-modal: #5E5E5E;
        --placeholder: #E6E6E6;
        --link: #818181;
        --icons: #FFFFFF;
        --page-breadcrumbs: #c3a0ff;
    }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        -webkit-text-size-adjust: none;
        text-size-adjust: none;
    }

    html{
        @media(max-width: 1080px){
            font-size: 93.75%;
        }
        @media(max-width: 720px){
            font-size: 87.5%;
        }
    }

    body {
        background: var(--background);
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        overflow-y: hidden;
    }

    body, input, textarea, button {
        font-family: 'Roboto', sans-serif;
    }
    button {
        cursor: pointer;
    }

    #root{
        width: 100%;
        min-height: 100vh;
    }
`;