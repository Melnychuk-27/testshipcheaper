//styles
import s from "./modalTitle.module.scss";

type TModalTitleProps = {
  title: any;
};

const ModalTitle = ({ title }: TModalTitleProps) => {
  return <div className={s.title}>{title}</div>;
};

export default ModalTitle;
