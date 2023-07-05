import { ButtonHTMLAttributes } from "react";

import * as S from "./styles";

export type TypesButton = "flat" | "ghost" | "text";
export type ThemeButton = "primary" | 'black';

export type ButtonProps = {
  children: React.ReactNode;
  typeButton?: TypesButton;
  themeButton?: ThemeButton;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({
  children,
  typeButton = "flat",
  themeButton = "primary",
  ...rest
}) => (
  <S.Wrapper typeButton={typeButton} themeButton={themeButton} {...rest}>
    <span>{children}</span>
  </S.Wrapper>
);

export default Button;
