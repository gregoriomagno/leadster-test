import React from "react";
import * as S from "./styled";
import Logo from "../../atoms/Logo";
const Header = () => {
  return (
    <S.Header>
      <S.WrapperLogo>
        <a href="/">
        <Logo />
        </a>
      </S.WrapperLogo>
    </S.Header>
  );
};

export default Header;
