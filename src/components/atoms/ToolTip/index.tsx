import React from "react";
import * as S from "./styled";

interface ToolTipProps {
  label: string;
}
const ToolTip = ({ label }: ToolTipProps) => {
  return (
    <S.Container>
      <S.TextToolTip>{label}</S.TextToolTip>
    </S.Container>
  );
};

export default ToolTip;
