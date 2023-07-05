import { styled, css } from "styled-components";

export const HeaderModal = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-bottom: 25px;
    p {
      font-size: 22px;
      font-weight: 600;
      color: ${theme.colors.black};
      span {
        color: ${theme.colors.blue};
      }
    }
  `}
`;

export const ContainerBottomModal = styled.div`
  display: flex;
  flex-direction: column;
  padding: 25px;
`;

export const SubTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 8px;
`;
export const TextDescription = styled.p`
  ${({ theme }) => css`
    font-size: 16px;
    color: ${theme.colors.black};
    margin-bottom: 8px;
  `}
`;
export const Description = styled.div`
  display: flex;
  flex-direction: column;
  hr{
    margin-bottom:8px ;
  }
`;

export const ContainerDownloads = styled.div`
  display: flex;
  flex-direction: column;
  hr{
    margin-bottom:8px ;
  }
  div{
    display:flex ;
    gap:5px;
  }
`;
