import React from "react";
import * as S from "./styled"
import Image from "next/image";

const Branding = () => {
  return (
    <S.ContainerBranding>
      <Image
        src={"/assets/leadster_270.gif"}
        alt="logo-leadster"
        width={194}
        height={42}
      />
      <p>Transformando visitantes em clientes.</p>
    </S.ContainerBranding>
  );
};

export default Branding;
