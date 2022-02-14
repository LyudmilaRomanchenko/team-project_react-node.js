import s from "./ModalContainer.module.css";

export default function ModalContainer({ active, children }) {
  return <div className={s.modalContainer}>{children}</div>;
}
