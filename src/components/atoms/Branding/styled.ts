import  styled,{css}  from "styled-components";

export const ContainerBranding = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SubTitle = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.grey};
    font-weight: 400;
    font-size: 15px;
  `}
`;
