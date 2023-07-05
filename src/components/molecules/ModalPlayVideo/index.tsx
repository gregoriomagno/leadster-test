import React, { useState } from "react";
import Modal from "../../atoms/Modal";
import IFrameVideo from "../../atoms/IFrameVideo";
import * as S from "./styled";
import DownloadBtn from "../../atoms/DownloadBtn";
interface ModalPlayVideoProps {
  videoSelected: string;
  modalIsOpen: boolean;
  setModalIsOpen: (isOpen: boolean) => void;
}
const ModalPlayVideo = ({
  videoSelected,
  modalIsOpen,
  setModalIsOpen,
}: ModalPlayVideoProps) => {
  const id = videoSelected?.substring(videoSelected.indexOf("=") + 1);
  return (
    <Modal
      showOverlay={true}
      style={{
        overflowY: "hidden",
        width: "min(80rem, 40%)",
      }}
      isOpen={modalIsOpen}
      onClose={() => setModalIsOpen(!modalIsOpen)}
    >
      <S.HeaderModal>
        <p>
          <span>Webinar: </span>
          Como aumentar sua
          <br /> Geração de Leads feat. Traktos
        </p>
      </S.HeaderModal>
      <IFrameVideo embedId={id} />
      <S.ContainerBottomModal>
        <S.Description>
          <S.SubTitle>Descrição</S.SubTitle>
          <hr />
          <S.TextDescription>
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries for previewing layouts and visual mockups.
          </S.TextDescription>
        </S.Description>
        <S.ContainerDownloads>
          <S.SubTitle>Downloads</S.SubTitle>
          <hr />
          <div>
            <DownloadBtn text="Spreadsheet.xls" themeColor={"green"} />
            <DownloadBtn text="Document.doc" themeColor={"blue"} />
            <DownloadBtn text="Presentation.ppt" themeColor={"yellow"} />
          </div>
        </S.ContainerDownloads>
      </S.ContainerBottomModal>
    </Modal>
  );
};

export default ModalPlayVideo;
