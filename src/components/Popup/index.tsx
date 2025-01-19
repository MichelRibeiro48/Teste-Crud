import { PopupProps } from "@/types/Popup";
import {
  ActionButton,
  CloseButton,
  ModalContainer,
  ModalContent,
  ModalTitle,
  Overlay,
} from "./styles";

export default function Popup({
  isOpen,
  close,
  onPressButton,
  title,
  content,
  titleButton,
}: PopupProps) {
  return (
    <>
      {isOpen && (
        <Overlay>
          <ModalContainer>
            <ModalTitle>{title}</ModalTitle>
            <ModalContent>{content}</ModalContent>
            <CloseButton onClick={close}>✖</CloseButton>
            <ActionButton onClick={onPressButton}>{titleButton}</ActionButton>
          </ModalContainer>
        </Overlay>
      )}
    </>
  );
}
