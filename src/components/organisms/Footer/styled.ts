import styled, { css } from "styled-components";

export const Fotter = styled.footer`
  ${({ theme }) => css`
    display: flex;
    background-color: ${theme.colors.white};
    justify-content: center;
    padding: 48px 0px;

  `}
`;
