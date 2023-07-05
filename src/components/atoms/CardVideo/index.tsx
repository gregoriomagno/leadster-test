import React from "react";
import Image from "next/image";

import * as S from "./styled";
import { ReactSVG } from "react-svg";
interface CardVideoProps {
  onClick: () => void;
}
const CardVideo = ({ onClick }: CardVideoProps) => {
  return (
    <S.ContainerCard onClick={onClick}>
      <S.ImageCard>
        <img
          src={"/assets/thumbnail.png"}
          alt="thumbnail"
          width={363}
          height={204}
        />
        <S.OverlayCard className="overlay">
          <ReactSVG src={"/assets/play.svg"} />
        </S.OverlayCard>
      </S.ImageCard>
      <S.WrapperTitleCard>
        <h2>Como aumentar sua Geração de Leads feat. Traktos</h2>
      </S.WrapperTitleCard>
    </S.ContainerCard>
  );
};

export default CardVideo;
