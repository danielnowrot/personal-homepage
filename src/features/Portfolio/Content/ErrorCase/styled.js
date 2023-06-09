import styled from "styled-components";

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

export const Title = styled.h3`
    font-size: 24px;
    font-weight: 700;
    line-height: 29px;
    color: ${({ theme }) => theme.color.mainText};
    margin-bottom: 32px;
`;

export const Text = styled.div`
    font-size: 20px;
    font-weight: 400;
    color: ${({ theme }) => theme.color.mainText};
    margin-bottom: 32px;
`; 