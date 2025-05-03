import styled from "styled-components";

export const Wrapper = styled.section`
    margin: 10px auto;
    box-shadow: 0 0 5px ${({ theme }) => theme.color.alto};
    background: ${({ theme }) => theme.color.white};
`;

export const Header = styled.header`
    border-bottom: 1px solid ${({ theme }) => theme.color.alto};
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 20px;
    justify-content: space-between;
    align-items: center;
    padding: 20px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        grid-template-columns: 1fr;
    }
`;

export const Title = styled.h2`
    font-size: 20px;
    margin: 0;
`;

export const Body = styled.div`
    font-size: 18px;
    font-weight: 100;
    line-height: 1.3em;
    margin: 0;
    padding: 20px;
`;
