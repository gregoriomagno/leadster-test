import React from "react";
import * as S from "./styled"
import Image from "next/image";

const Branding = () => {
  return (
    <S.ContainerBranding>
      <Image
        src={"/assets/leadster_270.gif"}
        alt="logo-leadster"
        width={250}
        height={62}
      />
      <S.SubTitle>Transformando visitantes em clientes.</S.SubTitle>
    </S.ContainerBranding>
  );
};

export default Branding;
