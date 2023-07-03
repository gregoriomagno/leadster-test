import styled, { css } from "styled-components";

export const Header = styled.header`
  ${({ theme }) => css`
    background-color: ${theme.colors.white}
  `}
`;
export const WrapperLogo = styled.div`
  display: flex;
  padding: 24px 0px;
  justify-content: center;
  /* background-color:red; */
`;
