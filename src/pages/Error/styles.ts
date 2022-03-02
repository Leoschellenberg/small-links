import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    height: 100vh;
    width: 100%;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    img{
        max-width: 400px;
    }

    .link{
        display: flex;
        color: var(--title);
    }

    .link{
            display: flex;
            align-items: center;
            justify-content: center;
            border: none;
            border-radius: 5px;
            color: var(--background);
            font-weight: 500;
            padding: 0 1rem;
            transition: 0.2s;
            text-decoration: none !important;
            background-color: #fff;

            &:hover{
                filter: brightness(0.9);
                transform: scale(1.05);
            }

            svg{
                width: 32px;
            }
    }
`;
