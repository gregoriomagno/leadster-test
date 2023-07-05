import styled, { css } from "styled-components";

export const Fotter = styled.footer`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    background-color: ${theme.colors.white};
    justify-content: center;
    align-items: center;
    padding: 48px 0px;

    gap: 40px;
  `}
`;

export const ContainerLinks = styled.div`
  display: flex;
  width: 100%;
  margin: 0px auto;
  justify-content: center;
  gap: 24px;
  @media screen and (max-width: 760px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;
export const ListLiks = styled.ul`
  list-style-type: none;
  li {
    margin-bottom: 18px;
  }
`;
export const TitleSectionLinks = styled.p`
  color: #2c3e50 !important;
  font-weight: 600;
  font-size: 18px;
`;
export const ColumLinks = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px;
  gap: 36px;
  /* background-color:blue; */
`;
export const Link = styled.a`
  ${({ theme }) => css`
    text-decoration: none;

    color: ${theme.colors.grey};
  `}
`;

export const ContainerInfContacts = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 15px;

    p {
      color: ${theme.colors.grey};
      span {
        color: ${theme.colors.black};
      }
    }
  `}
`;

export const ColumContacts = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px;
  gap: 18px;
`;
export const ListSocialICons = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 12px;
`;
export const Divider = styled.hr`
  width: 100%;
`;

export const RowCopyright = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 100%;
    font-size: 16px;
    text-align: center;
    color: ${theme.colors.grey};
    justify-content: space-evenly;
    a {
      text-decoration: none;
      color: ${theme.colors.blue};
    }
    @media screen and (max-width: 1300px) {
      flex-direction: column;
      align-items: center;
      gap: 10px;
    }
  `}
`;
