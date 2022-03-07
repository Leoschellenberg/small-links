import styled from "styled-components";


export const Container = styled.div`
    position: absolute;
    bottom: 5rem;
    background: #fff;
    padding: 14px;
    width: 700px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    
    animation: slideY 1s;

    span{
        display: flex;
        font-size: 1rem;
        color: var(--link);
        flex-wrap: wrap;
    }

    button{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: .5rem 1rem;
        color: var(--title);
        border: none;
        border-radius: 5px;
        background: var(--background);
        
    }


    @keyframes slideY {
        from {
            transform: translateY(90px);
        }
        to {
            transform: translateY(0px);
        }
    }

    @media (max-width: 768px) {
        width: 90%;
    }
    @media (max-width: 500px) {
        width: 90%;
        bottom: 2rem;
    }
`;

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1{
        font-size: 1.5rem;
        color: var(--title-modal);
        flex-wrap: wrap;
    }

    button{
        border: none;
        background: transparent;
    }
`;
