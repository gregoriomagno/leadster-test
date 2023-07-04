import React from "react";
import * as S from "./styled";
import Image from "next/image";
import ToolTip from "../../atoms/ToolTip";

const BannerApresentation = () => {
  return (
    <S.Container>
      <S.Content>
      <ToolTip label="WEBINARS EXCLUSIVOS"/>
        <div>
        <S.TextTop>Menos Conversinha,</S.TextTop>
        <S.WrapperTextMain>
          <S.TextMain>Mais conversão</S.TextMain>
          <S.WrapperIconTextMain>
            <Image
              src={"/assets/asset-header.png"}
              alt="logo-leadster"
              width={49}
              height={32}
            />
          </S.WrapperIconTextMain>
        </S.WrapperTextMain>
        </div>
        <S.lineDivider />
        <S.TextDescription>
          Conheça as estratégias que <strong>mudaram o jogo</strong> e como
          aplicá-las no seu negócio
        </S.TextDescription>
      </S.Content>
    </S.Container>
  );
};

export default BannerApresentation;
