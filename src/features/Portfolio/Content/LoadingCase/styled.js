import styled, { keyframes } from "styled-components";
import { ReactComponent as Icon } from "./icon-spinner.svg";

const rotate = keyframes`
    0% {
        transform: rotate(0deg);
    };
    100% {
        transform: rotate(360deg);
    };
`;

export const Text = styled.p`
    font-size: 20px;
    font-weight: 400;
    line-height: 60%;
    color: ${({ theme }) => theme.color.mainText};
    margin-bottom: 32px;
`;

export const IconElipse = styled(Icon)`
    margin-top: 40px;
    max-width: 160px;
    animation: ${rotate} 2s linear infinite;
    @media (max-width:${({ theme }) => theme.breakPoint.mobileMax}px) {
        max-width: 80px;
    }
`;