import styled, { css } from "styled-components";

export const ContainerCard = styled.div`
  ${({ theme }) => css`
    display: flex;

    flex-direction: column;
    width: 363px;
    box-shadow: 0 20px 30px 0 rgba(12, 0, 46, 0.15);

    border-radius: 10px;
    align-items: center;
    &:hover {
    cursor:pointer ;
      .overlay {
        opacity: 1;
      }
      color: ${theme.colors.blue};
    }
  `}
`;

export const ImageCard = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  img {
    display: block;
    transition: 0.5s;
    border-radius: 10px;
    opacity: 1;
  }
`;

export const OverlayCard = styled.div`
  ${({ theme }) => css`
    display: flex;
    position: absolute;
    border-radius: 10px 10px 0px 0px;
    background-color:  rgba(1, 131, 253,0.5);
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    opacity: 0;
    top: 50%;
    left: 50%;
    transition: 0.5s;
    transform: translate(-50%, -50%);
    svg {
      width:64px ;
      height:64px ;
    }
  `}
`;

export const WrapperTitleCard = styled.div`
  display: flex;
  padding: 15px 20px;
`;
