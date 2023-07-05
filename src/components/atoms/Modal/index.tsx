import { ReactNode } from "react";
import * as S from "./styles";
import CloseSharpIcon from "@mui/icons-material/CloseSharp";
type ModalProps = {
  children: ReactNode;
  containerStyle?: React.CSSProperties;
  isOpen?: boolean;

  onClose: () => void;

  showOverlay?: boolean;
  width?: string;
  style?: any;
};
const Modal = ({
  children,
  isOpen,
  onClose,
  showOverlay = true,
  style,
  width,
}: ModalProps) => {
  return (
    <>
      <S.Content>
        <S.Wrapper
          className={`modal ${isOpen ? "active" : "none"}`}
          id="modal"
          style={style}
          width={width}
        >
          <S.ContainerIconClose>
            <CloseSharpIcon onClick={() => onClose()} />
          </S.ContainerIconClose>

          <S.Body>{children}</S.Body>
        </S.Wrapper>
        {showOverlay && (
          <div
            id={isOpen ? "overlay" : "none"}
            onClick={() => onClose()}
            style={{ opacity: isOpen ? 1 : 0 }}
          ></div>
        )}
      </S.Content>
    </>
  );
};

export default Modal;
