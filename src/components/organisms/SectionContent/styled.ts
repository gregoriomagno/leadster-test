import styled, { css } from "styled-components";

export const Container = styled.section`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    padding: 80px 0px;
    width: 100%;
    background-color: ${theme.colors.white};
  `}
`;
export const ContentSection = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: fit-content;
    align-items: center;

    hr {
      width: 100%;
      margin-top: 20px;
      height: 3px;
    }
  `}
`;

export const RowHeaderConten = styled.div`
  display: flex;
  align-items: center;
  /* background-color: red; */
  width: 100%;
  justify-content: space-between;
  ul {
    display: flex;
    gap: 10px;
    list-style: none;
    @media screen and (max-width: 680px) {
      flex-direction: column;
      align-items: center;
    }
  }
  @media screen and (max-width: 1200px) {
    flex-direction: column;
    gap: 20px;
  }
`;

export const WrapperButtonDropdown = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  p {
    font-size: 14px;
    font-weight: 600;
  }
  @media screen and (max-width: 1200px) {
    flex-direction: column;
  }
`;

export const Content = styled.div`
  display: grid;
  justify-items: center;
  width: 100%;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 25px;
  padding: 40px 0px;

  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
    width: 100%;
  }
  @media screen and (max-width: 820px) {
    grid-template-columns: 1fr;
    width: 100%;
  }
`;
