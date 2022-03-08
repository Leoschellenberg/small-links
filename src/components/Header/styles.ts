import styled from "styled-components";

export const Container = styled.header`
    display: flex;
    justify-content: flex-end;
    max-width: 1400px;
    margin: 0 auto ;
    align-items: center;
    height: 72px;
    gap: 30px;
    padding: 1rem;

    img {
        max-width: 1.4rem;
        height: 1.4rem;
    }

    button {
        background-color: var(--bg-button);
        font-size: 1rem;
        border: 0;
        padding: .4rem 2rem;
        color: var(--title);
        border-radius: 5px;
        font-weight: 500;
        
        transition: filter 0.2s;

        &:hover{
            filter: brightness(0.9);
        }
    }

    @media (max-width: 700px) {
        justify-content: center;
    }
`;