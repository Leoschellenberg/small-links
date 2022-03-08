import styled from "styled-components";

export const Container = styled.header`
    display: flex;
    align-items: center;
    font-size: 1rem;
    padding: 2rem 0;
    gap: .5rem;

    a{
        font-weight: 600;
        color: var(--title);
        text-decoration: none ;
    }
    span{
        font-weight: 500;
        color: var(--page-breadcrumbs);
    }
`;
