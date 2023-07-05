import styled, { css } from "styled-components";
import { shade } from "polished";
import { DownloadBtnProps } from ".";
import theme from "../../../styles/theme";

type ButtonDownloadProps = Pick<DownloadBtnProps, "themeColor">;

const modifiersTheme = {
  green: {
    main: "#d5f7d5",
    secondary: "#c5e8c5",
  },
  blue: {
    main: "#97c9fc",
    secondary: "#90c0f5",
  },
  yellow: {
    main: "#fffdb0",
    secondary: "#FFFD9B",
  },
};

export const ButtonDownload = styled.button<ButtonDownloadProps>`
  ${({ themeColor }) => css`
    display: flex;
    border-radius: 4px;
    border: none;
    color: ${shade(0.5, modifiersTheme[themeColor!].main)};
    width: fit-content;
    background: ${modifiersTheme[themeColor!].main};
    align-items: center;
    cursor: pointer;
    div {
      display: flex;
      justify-content: center;
      border-radius: 4px;
      align-items: center;
      padding: 6px;
      background: ${modifiersTheme[themeColor!].secondary};
    }
    span {
      font-size: 14px;
      padding: 6px 10px;
    }
  `}
`;
