import styled, { css } from "styled-components";

export const Container = styled.section`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${theme.colors.light_blue};
  `}
`;
export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;

    flex-direction: column;
    padding: 12% 0px;
    text-align: center;
    align-items: center;
    gap: 10px;
  `}
`;

export const TextTop = styled.h2`
  ${({ theme }) => css`
    font-size: 50px;
    font-weight: 600;
    color: ${theme.colors.black};
  `}
`;
export const WrapperTextMain = styled.div`
  position: relative;
  padding: 0px 20px;
  line-height: 94px;
`;
export const TextMain = styled.h1`
  font-size: 9.6rem;
  font-weight: bold;
  background: -webkit-linear-gradient(45deg, #2c83fb, #1f76f0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media screen and (max-width: 770px) {
    font-size: 6rem;
  }
`;
export const WrapperIconTextMain = styled.div`
  position: absolute;
  top: -12px;
  right: 3px;
  @media screen and (max-width: 770px) {
    top: 82px;
    right: 120px;
  }
  @media screen and (max-width: 770px) {
    top: -8px;
    right: 4px;
    img {
      width: 40px;
      height: 28px;
    }
  }
  @media screen and (max-width: 493px) {
    img {
      display: none;
    }
  }
`;
export const lineDivider = styled.hr`
  ${({ theme }) => css`
    color: ${theme.colors.grey};
    height: 2px;
    width: 100%;
  `}
`;

export const TextDescription = styled.p`
  ${({ theme }) => css`
    font-size: 19px;
    color: ${theme.colors.black};
    @media screen and (max-width: 770px) {
      font-size: 16px;
    }
  `}
`;
