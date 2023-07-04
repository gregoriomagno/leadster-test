import { styled, css } from "styled-components";

export const Container = styled.section`
  ${({ theme }) => css`
    display: flex;
    overflow: hidden;
    width: 100%;
    background-color: ${theme.colors.light_blue};
  `}
`;

export const ContentLeft = styled.div`
  display: flex;

  width: 50%;
  /* background-color: red; */
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  position: relative;
`;
export const WrapperImage = styled.div`
  z-index: 3;
`;
export const ShadowShapeThree = styled.div`
  ${({ theme }) => css`
    display: block;
    position: absolute;
    background: -webkit-linear-gradient(
      200deg,
      #e3f0ff,
      ${theme.colors.light_blue}
    );
    border-radius: 80px!important;
    transform:rotate(-45deg)!important;
    left: -550px;
    top: 200px;
    width: 1000px;
    height: 1000px;
    z-index: 1;
  `}
`;
export const ContentRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  gap: 24px;
  hr {
    width: 70%;
  }
`;
export const TitleContainerRight = styled.h2`
  ${({ theme }) => css`
    font-size: 38px !important;
    font-weight: 500;
    color: ${theme.colors.black};
    b {
      font-weight: 700;
    }
  `}
`;

export const SubTitleContainerRight = styled.h3`
  ${({ theme }) => css`
    font-size: 18px !important;
    font-weight: 500;
    color: ${theme.colors.black};

    b {
      font-weight: 700;
    }
  `}
`;

export const WrapperRating = styled.div`
  display: flex;


  flex-direction: column;
`;

export const RowRatingButton = styled.div`
  display: flex;
  gap: 10px;
  width: 70%;
  button {
    box-shadow: 0 20px 30px 0 rgba(12, 0, 46, 0.1);
    padding: 14px 35px;
  }
  img {
    margin: 0px 16px 16px 16px;
  }
`;
export const ContainerNoCardScore = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 100%;
    align-items:center ;
    gap:4px;
    p {
      font-size:15px ;
      color: ${theme.colors.balck};
    }
  `}
`;
