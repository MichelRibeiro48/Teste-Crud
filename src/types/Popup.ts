export interface PopupProps {
  isOpen: boolean,
  close: () => void,
  onPressButton: () => void,
  title: string,
  content: string,
  titleButton: string,
}