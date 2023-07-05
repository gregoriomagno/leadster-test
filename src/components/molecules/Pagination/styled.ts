import styled, { css } from "styled-components";

export const Pagination = styled.div`
  display: flex;
  gap: 1.6rem;
  align-items: center;

  margin-top: 3.2rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }

  span {
    font-size: 1.6rem;
    line-height: 2.4rem;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.88);
  }
`;

export const Buttons = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: 0.8rem;
    flex-wrap: wrap;
 
    .actived {
      background-color: ${theme.colors.white};
      color: ${theme.colors.blue};
      border: solid 1px ${theme.colors.blue};
    }

    button {
      padding: 0.2rem 0.8rem;
      cursor: pointer;
      border: none;

      border-radius: 0.4rem;

      font-weight: 600;

      line-height: 2rem;

      font-size: 1.4rem;

      background: transparent;
      color: ${theme.colors.black};

      transition: background-color 0.15s;

    }
  `}
`;
