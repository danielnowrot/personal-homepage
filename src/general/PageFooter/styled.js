import styled from "styled-components";

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    /* flex-direction: row;
    align-content: flex-start;
    justify-content: flex-start; */
    max-width: 1216px;
    margin: 120px auto 109px;    
`;

export const PreTitle = styled.h2`
    font-size: 12px;
    font-weight: 700;
    color: ${({ theme }) => theme.color.textSecondary};
    margin-bottom: 24px;    
    margin-top: 0;
`;

export const MailToLink = styled.a`
    font-size: 32px;
    font-weight: 900;
    line-height: 39px;
    margin-bottom: 24px;
    text-decoration: none;
    color: ${({ theme }) => theme.color.mainText};
    transition: 0.5s;
        &:hover{
            color: ${({ theme }) => theme.color.button}
        };
        @media (max-width: ${({ theme }) =>theme.breakPoint.mobileMax}px) {
            font-size: 18px;
        };
`;

export const Content = styled.p`
    margin-top: 24px;
    font-weight: 400;
    font-size: 18px;
    line-height: 25.2px;
    color: ${({ theme }) => theme.color.mainText};
`;

export const Socials = styled.div`
    display: flex;
    flex-direction: row;
    gap: 24px;
    margin-top: 56px;
`;

export const Link = styled.a`
    color: ${({ theme }) => theme.color.mainText};
    width: 48px;
    height: 48px;
    transition: 0.5s;
    &:hover{
            color: ${({ theme }) => theme.color.button};
        };
`;