import React from "react";
import Image from "next/image";

import * as S from "./styled";
const CardVideo = () => {
  return (
    <S.ContainerCard>
      <Image
        src={"/assets/thumbnail.png"}
        alt="thumbnail"
        width={363}
        height={204}
      />
      <S.WrapperTitleCard>
        <h2>Como aumentar sua Geração de Leads feat. Traktos</h2>
      </S.WrapperTitleCard>
    </S.ContainerCard>
  );
};

export default CardVideo;
