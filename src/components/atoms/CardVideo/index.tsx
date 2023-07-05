import React from "react";
import Image from "next/image";

import * as S from "./styled";
import { ReactSVG } from "react-svg";
import { IWebinar } from "../../../Types/webinar";
interface CardVideoProps {
  onClick: () => void;
  data:IWebinar;
}
const CardVideo = ({ onClick,data }: CardVideoProps) => {
  return (
    <S.ContainerCard onClick={onClick}>
      <S.ImageCard>
        <img
          src={data.thumbnail}
          alt="thumbnail"
          width={363}
          height={204}
        />
        <S.OverlayCard className="overlay">
          <ReactSVG src={"/assets/play.svg"} />
        </S.OverlayCard>
      </S.ImageCard>
      <S.WrapperTitleCard>
        <h2>{data.title}</h2>
      </S.WrapperTitleCard>
    </S.ContainerCard>
  );
};

export default CardVideo;
