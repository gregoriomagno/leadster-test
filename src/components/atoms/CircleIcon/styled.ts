import { styled, css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    cursor: pointer;
    :hover {
      background: ${theme.colors.light_blue};

      svg path {
        color: ${theme.colors.white};
      }
    }
  `}
`;
export const CircleWrapper = styled.div`
  ${({ theme }) => css`
  display: flex;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  color: #858da8;
  background: ${theme.colors.light_grey};
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
  `}
`;
