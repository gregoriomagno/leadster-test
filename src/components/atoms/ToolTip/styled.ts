import { styled, css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: fit-content;
    padding: 5px 10px;
    border: solid 2px ${theme.colors.blue};
    text-align: center;
    border-radius: 50px 50px 50px 0;
  `}
`;
export const TextToolTip = styled.p`
  ${({ theme }) => css`
    font-size: 16px;
    color: ${theme.colors.blue};
    font-weight:600 ;
  `}
`;
