//styles
import s from "./modalBody.module.scss";

type TBackgroundProps = {
  children?: React.ReactNode;
};

const ModalBody = ({ children }: TBackgroundProps) => {
  return <div className={s.modalBody}>{children}</div>;
};

export default ModalBody;
