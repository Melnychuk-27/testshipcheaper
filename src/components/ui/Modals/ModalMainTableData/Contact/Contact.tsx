import { useEffect } from "react";
import { useForm } from "react-hook-form";

//styles
import s from "./contact.module.scss";

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
  setModalWindowStatus,
  setModalWindowInfo,
} from "../../../../../redux/App/app";
import { addNewItemInTable } from "../../../../../redux/Main/main";

import { ENameFieldsContact } from "../enums";
import { validation } from "./ContactValidation";

type TContactProps = {
  setStep: Function;
};

const Contact = ({ setStep }: TContactProps) => {
  const dispatch = useAppDispatch();

  const validations = validation();

  const { modalWindowInfo } = useAppSelector((state) => state.app);

  const externalId = (Math.random() * (999999 - 100000) + 100000).toFixed(0);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "all",
  });

  const onSubmit = (data: any) => {
    dispatch(
      addNewItemInTable({
        ...modalWindowInfo,
        id: externalId,
        fax: data?.fax,
        email: data?.email,
        birthday: data?.birthday,
        homepage: data?.homepage,
      })
    );
    dispatch(setModalWindowInfo(null));
    dispatch(setModalWindowStatus(false));
  };

  return (
    <>
      <ModalTitle title="Contact" />
      <ModalBody>
        <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
          <Input
            id={ENameFieldsContact.fax}
            name={ENameFieldsContact.fax}
            label="Fax"
            error={errors?.[ENameFieldsContact.fax]}
            register={register}
            className={s.input}
            validation={validations.fax}
          />
          <Input
            marginTop={"3.28px"}
            id={ENameFieldsContact.email}
            name={ENameFieldsContact.email}
            label="E-mail"
            error={errors?.[ENameFieldsContact.email]}
            register={register}
            className={s.input}
            validation={validations.email}
          />
          <Input
            marginTop={"3.28px"}
            id={ENameFieldsContact.birthday}
            name={ENameFieldsContact.birthday}
            label="Birthday"
            type="date"
            error={errors?.[ENameFieldsContact.birthday]}
            register={register}
            className={s.input}
          />
          <Input
            marginTop={"3.28px"}
            id={ENameFieldsContact.homepage}
            name={ENameFieldsContact.homepage}
            label="Homepage"
            error={errors?.[ENameFieldsContact.homepage]}
            register={register}
            className={s.input}
            validation={validations.homepage}
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

export default Contact;
