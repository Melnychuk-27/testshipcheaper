//styles
import s from "./ModalWrapper.module.scss";

//hooks
import { useAppDispatch } from "../../../../../hooks/redux";

//redux
import { setModalWindowStatus } from "../../../../../redux/App/app";

type TBackgroundProps = {
  children?: React.ReactNode;
};

const ModalWrapper = ({ children }: TBackgroundProps) => {
  const dispatch = useAppDispatch();

  return (
    <>
      <div
        style={{ background: "rgba(255,255,255,.5)" }}
        className={s.background}
        onClick={() => dispatch(setModalWindowStatus(false))}
      />
      <div className={s.modalWrapper}>{children}</div>
    </>
  );
};

export default ModalWrapper;
