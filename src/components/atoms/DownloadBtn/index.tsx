import { ReactSVG } from "react-svg";
import * as S from "./styles";

type ThemeButton = "green" | "blue" | 'yellow';
export interface DownloadBtnProps {
  text: string;
  themeColor: ThemeButton;
}

const DownloadBtn = ({ text, themeColor }: DownloadBtnProps) => {
  return (
    <S.ButtonDownload themeColor={themeColor}>
      <div>
        <img src="/assets/cloud-download.png" width={16}/>
      </div>
      <span>{text}</span>
    </S.ButtonDownload>
  );
};

export default DownloadBtn;
