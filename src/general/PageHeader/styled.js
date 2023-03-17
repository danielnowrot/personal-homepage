import styled from "styled-components";

export const Wrapper = styled.div`
    max-width: 1216px;
    margin: auto;
    margin-top: 120px;
    display: flex;
    gap: 66px;
    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px) {
        display: flex;
        flex-direction: column;
        margin-top: 0;        
    };
`;

export const Photo = styled.img`
    max-width: 398px;
    max-height: 398px;
    border-radius: 50%;
    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px) {
        align-self: flex-start;
        margin-left: 16px;
        max-width: 60%;
    };
`;

export const Paragraph = styled.p`
    margin-bottom: 32px;
    margin-top: 0;
    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px) {
        font-size: 22px;
        margin-bottom: 17px;
    };
`;

export const PreTitle = styled.div`
    color: ${({ theme }) => theme.color.textSecondary};
    font-size: 12px;
    font-weight: 700;
    margin-bottom: 12px;
`;

export const Content = styled.div`
    font-size: 20px;
    font-weight: 400;
    line-height: 28px;
    display: grid;
    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px) {
        margin-left: 16px;
        margin-right: 16px;
    };
`;

export const Title = styled.h1`
    font-weight: 900;
    font-size: 38px;
    margin-top: 0;
    margin-bottom: 35px;
    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px) {
        font-size: 22px;
        margin-bottom: 16px;
    };
`;

export const MessageButton = styled.img`
    max-width: 19.23px;
    max-height: 17.12px;
    color: ${({ theme }) => theme.color.buttonFont};
    margin-right: 18.77px;
`;

export const Link = styled.a`
    max-width: fit-content;
    max-height: fit-content;
`;

export const Button = styled.button`
    padding: 12px 16px;
    text-align: center;
    background-color: ${({ theme }) => theme.color.button};
    color: ${({ theme }) => theme.color.buttonFont};;
    font-size: 20px;
    font-weight: 600;
    border-radius: 4px;
    border: 1px solid;
    border-color:${({ theme }) => theme.color.border};
    max-width: max-content;
    transition: 0.5s;
    margin-bottom: 48px;
    &:hover{
        border: 1px solid ${({ theme }) => theme.color.border};
        border-radius: 4px;;
        cursor: pointer;
        box-shadow: 2px -2px 0px #8CC2FF, -2px 2px 0px #8CC2FF, 2px 2px 0px #8CC2FF, -2px -2px 0px #8CC2FF;  
    };
    &::selection{
        border: 1px solid ${({ theme }) => theme.color.border};
        box-shadow: inset 0px 2px 0px ${({ theme }) => theme.color.shadow};
        border-radius: 4px;
    };
`;