import { ReactSVG } from "react-svg";
import React from "react";
import * as S from "./styled";
interface CircleIconProps {
  icon: string;

}
const CircleIcon = ({ icon  }: CircleIconProps) => {
  return (
    <S.Container>
      <S.CircleWrapper>
        <ReactSVG src={icon} width={14} height={14} />
      </S.CircleWrapper>
    </S.Container>
  );
};

export default CircleIcon;
