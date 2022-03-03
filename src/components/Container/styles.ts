import styled from "styled-components";

export const Container = styled.main`
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    padding-top: 5rem;
    min-height: calc(100vh - 72px);
    width: 100%;

    .logo{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 2rem;

        img{
            max-width: 150px;
        }

        h1 {
            font-size: 2.5rem;
            color: var(--title);
        }

        span{
            color: var(--title);
            font-weight: 500;
        }
    }

    .area-input{
        display: flex;
        width: 500px;
        flex-direction: column;
        align-items: center;
        gap: 1rem;

        animation: slideY 2s;

        div{
                width: 100%;
                height: 45px;
                display: flex;
                align-items: center;
                justify-content: center;
                background-color: var(--bg-button);
                border-radius: 5px;
                padding: .5rem 1rem;
                gap: 1rem;

                input {
                    width: 100%;
                    height: 100%;
                    background: transparent;
                    border: 0;
                    color: var(--title);
                    outline: none;
                    font-size: 1rem;
                    
                    &::placeholder{
                        color: var(--placeholder);
                    }
                }

        }

        button{
            width: 100%;
            height: 45px;
            border: none;
            border-radius: 5px;
            color: var(--background);
            font-weight: 500;

            transition: 0.2s;

            &:hover{
                filter: brightness(0.9);
                transform: scale(1.05);
            }
        }
    }

    @keyframes slideY {
        from {
            transform: translateY(90px);
        }
        to {
            transform: translateY(0px);
        }
    }

    @media(max-width: 568px){
        .logo img {
            width: 95px;
        }
        .logo h1 {
            font-size: 40px;
        }

        .area-input {
            width: 85%;
        }
    }
`;