import styled, { css } from "styled-components";

export const Content = styled.div`
  #overlay {
    position: fixed;

    z-index: 1000;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    background-color: rgba(0, 0, 0, 0.4);

    &.active {
      opacity: 1;
      pointer-events: all;
    }
  }
`;
type WrapperProps = {
  width?: string;
};
export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, width }) => css`
    display: flex;
    flex-direction: column;
    position: fixed;
    box-sizing: border-box;
    border-top: 4px solid ${theme.colors.blue};
    /* height: 50%; */
    top: 50%;
    left: 50%;
   
    transform: translate(-50%, -50%) scale(0);
    border-radius: 0.8rem;
    z-index: 99999;
    background: #fff;
    transition: 200ms ease-in-out;
    min-width: 370px;
    width: ${width};
    &.active {
      transform: translate(-50%, -50%) scale(1);
    }

    @media (max-width: 520px) {
      width: 90%;
    }

    /* &::-webkit-scrollbar-track {
      border-radius: 0.6rem;
      width: 1.2rem;
      background-color: #fff;
    }

    &::-webkit-scrollbar {
      border-radius: 0.6rem;
      width: 1.2rem;
      background-color: #fff;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 0.6rem;
      border: 0.3rem solid transparent;
      background-clip: content-box;
      background-color: rgba(0, 0, 0, 0.16);

      &:hover {
        background-color: rgba(0, 0, 0, 0.24);
      }
    } */
  `};
`;
export const ContainerIconClose = styled.div`
 ${({ theme }) => css`
 display: flex;
  /* background-color:green ; */
  justify-content:end ;
  padding: 10px 10px;
  svg{
    width: 20px;
    height: 20px;
    color: ${theme.colors.grey};
    cursor: pointer;
  }
 `}
 
 
`;

export const Body = styled.div``;
