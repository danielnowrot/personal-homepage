import styled from "styled-components";

export const List = styled.li`
    margin: auto;
    margin-top: 24px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    max-width: 1216px;
    row-gap: 32px;
    column-gap: 32px;
    list-style: none;
    padding: 0;
    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px) {
        grid-template-columns: 1fr;
    };
`;

export const Tile = styled.li`
    max-width: 592px;
    text-align: justify;
    border-radius: 4px;
    background-color: ${({ theme }) => theme.color.sectionBackground};
    border: 6px solid ${({ theme }) => theme.color.border};
    box-shadow: 0px -2px 50px ${({ theme }) => theme.color.shadow}, 0px 16px 58px ${({ theme }) => theme.color.shadow};
    transition: 0.5s;
    &:hover{
        border: 6px solid ${({ theme }) => theme.color.borderOnHover};
        box-shadow: 0px -2px 50px rgba${({ theme }) => theme.color.shadow}, 0px 16px 58px rgba${({ theme }) => theme.color.shadow};
        border-radius: 4px;
        transform: scale(1.02);
    };
`;

export const Container = styled.div`
    padding: 56px;
    font-weight: 400;
    font-size: 18px;
    color: ${({ theme }) => theme.color.textSecondary};
    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px) {
        padding: 24px;
    };
`;

export const Title = styled.h3`
    margin: 0;
    font-weight: 700;
    font-size: 24px;
    color: ${({ theme }) => theme.color.textThird};
`;

export const Description = styled.p`
    word-break: break-word;
    font-weight: 400;
    line-height: 25.2px;
    font-size: 18px;
    margin-top: 24px;
    margin-bottom: 24px;
    overflow-x: auto;
`;

export const LinkLabel = styled.div`
    margin-bottom: 8px;
    word-break: break-all;
    font-weight: 400;
    font-size: 18px;
    line-height: 140%;
`;

export const Link = styled.a`
    text-decoration: none;
    color: ${({ theme }) => theme.color.button};
    border-bottom: 1px solid ${({ theme }) => theme.color.borderOnHover};
    transition: 0.3s;
    &:hover{
        color: ${({ theme }) => theme.color.buttonHover};
    };
`;