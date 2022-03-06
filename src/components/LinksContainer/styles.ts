import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: calc(100vh - 72px);
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;

    .links-header{
        display: flex;
        align-items: center;
        gap: 1rem;

        h1{
            color: var(--title);
            font-size: 2rem;
        }
    }

    .empty-list{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;

        h2{
            color: #EBEBEB;
            text-transform: uppercase;
            font-size: 1rem;
        }
        img{
            width: 25rem;
        }
    }
`

export const ListItem = styled.div`
    display: flex;
    padding: .5rem 1rem;
    background: var(--bg-button);
    border-radius: 5px;
    align-items: center;
    margin-top: 1rem;

    button{
        background: transparent;
        border: none;
        color: var(--title);
    }

    .link{
        display: grid;
        grid-template-columns: auto 1fr;
        flex: 1;
        text-align: left;
        gap: .5rem;
        white-space: nowrap;
        overflow: hidden;
    }

`;