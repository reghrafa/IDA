import IModalButton from "../interfaces/IModalButton";
import { ModalKey } from "../../../../../dataLayer/stores/ModalStore";

export default interface IDefaultModalProps {
  modalKey: ModalKey;
  title: string;
  buttons: IModalButton[];
}
