import styled from "styled-components";

export const StyledList = styled.ul`
  margin-bottom: 0;
  display: grid;
  grid-template-columns: auto auto auto;
  padding-inline-start: 32px;
  color: ${({ theme }) => theme.color.textSecondary};
  font-weight: 400;
  font-size: 18px;
  list-style: none;
  li::before {
    content: "•"; 
    color: ${({ theme }) => theme.color.button};
    padding-right: 16px;
    font-size: 29px;
  };
  @media (max-width: ${({ theme }) => theme.breakPoint.maxContent}px) {
    grid-template-columns: 1fr 1fr;
  };
  @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px) {
    display: flex;
    flex-direction: column;
  };
`;

export const ListItem = styled.li`
  max-width: 390px;
  word-break: break-word;
`;