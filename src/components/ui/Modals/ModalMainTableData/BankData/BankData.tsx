import { useEffect } from "react";
import { useForm } from "react-hook-form";

//styles
import s from "./bankData.module.scss";

//components
import ModalBody from "../../ModalComponents/ModalBody/ModalBody";
import ModalTitle from "../../ModalComponents/ModalTitle/ModalTitle";

//ui
import Input from "../../../Inputs/Input/Input";
import ButtonMain from "../../../Buttons/ButtonMain/ButtonMain";

//hooks
import { useAppDispatch, useAppSelector } from "../../../../../hooks/redux";

//redux
import {
  setModalWindowInfo,
  setModalWindowStatus,
} from "../../../../../redux/App/app";

import { ENameFieldsBankData } from "../enums";
import { validation } from "./BankDataValidation";

type TBankDataProps = {
  setStep: Function;
};

const BankData = ({ setStep }: TBankDataProps) => {
  const dispatch = useAppDispatch();

  const validations = validation();

  const { modalWindowInfo } = useAppSelector((state) => state.app);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    mode: "all",
  });

  const onSubmit = (data: any) => {
    dispatch(
      setModalWindowInfo({
        ...modalWindowInfo,
        iban: data?.iban,
        bic: data?.bic,
        bankName: data?.bankName,
      })
    );

    setStep((prev: number) => prev + 1);
  };

  useEffect(() => {
    if (modalWindowInfo) {
      modalWindowInfo?.iban &&
        setValue(ENameFieldsBankData.iban, modalWindowInfo?.iban);
      modalWindowInfo?.bic &&
        setValue(ENameFieldsBankData.bic, modalWindowInfo?.bic);
      modalWindowInfo?.bankName &&
        setValue(ENameFieldsBankData.bankName, modalWindowInfo?.bankName);
    }
  }, [modalWindowInfo]);

  return (
    <>
      <ModalTitle title="Bank Data" />
      <ModalBody>
        <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
          <Input
            id={ENameFieldsBankData.iban}
            name={ENameFieldsBankData.iban}
            label="IBAN"
            required
            error={errors?.[ENameFieldsBankData.iban]}
            register={register}
            className={s.input}
            validation={validations.iban}
          />
          <Input
            marginTop={"3.28px"}
            id={ENameFieldsBankData.bic}
            name={ENameFieldsBankData.bic}
            label="BIC"
            required
            error={errors?.[ENameFieldsBankData.bic]}
            register={register}
            className={s.input}
            validation={validations.bic}
          />
          <Input
            marginTop={"3.28px"}
            id={ENameFieldsBankData.bankName}
            name={ENameFieldsBankData.bankName}
            required
            label="Bank name"
            error={errors?.[ENameFieldsBankData.bankName]}
            register={register}
            className={s.input}
            validation={validations.bankName}
          />
          <div className={s.groupsBtn}>
            <ButtonMain
              content="Cancel"
              maxWidth="65px"
              isNotButton
              onClick={() => {
                dispatch(setModalWindowStatus(false));
              }}
            />
            <ButtonMain
              content="Previous"
              maxWidth="75px"
              isNotButton
              onClick={() => {
                setStep((prev: number) => prev - 1);
              }}
            />
            <ButtonMain content="Next" mode="fullGreen" maxWidth="53px" />
          </div>
        </form>
      </ModalBody>
    </>
  );
};

export default BankData;
