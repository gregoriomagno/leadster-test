import Image from "next/image";
import React from "react";
import * as S from "./styled";
const Header = () => {
  return (
    <S.Header>
      <S.WrapperLogo>
        <a href="/">
          <Image
            src={"/assets/logo.png"}
            alt="logo-leadster"
            width={194}
            height={42}
          />
        </a>
      </S.WrapperLogo>
    </S.Header>
  );
};

export default Header;
