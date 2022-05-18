import { useEffect } from "react";

//styles
import s from "./ModalClose.module.scss";

//hooks
import { useAppDispatch } from "../../../../../hooks/redux";

//svgs
import { closeSvg } from "../../../svgs/closeSvg";

//redux
import { setModalWindowStatus } from "../../../../../redux/App/app";

const ModalClose = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const handleEsc = (event: any) => {
      if (event.keyCode === 27) {
        dispatch(setModalWindowStatus(false));
      }
    };
    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, []);

  return (
    <div
      className={s.wrapperClose}
      onClick={(e: any) => {
        dispatch(setModalWindowStatus(false));
      }}
      dangerouslySetInnerHTML={{ __html: closeSvg }}
    />
  );
};

export default ModalClose;
