import { useEffect } from "react";
import { useForm } from "react-hook-form";

//styles
import s from "./invoiceAddeess.module.scss";

//components
import ModalBody from "../../ModalComponents/ModalBody/ModalBody";
import ModalTitle from "../../ModalComponents/ModalTitle/ModalTitle";

//ui
import Input from "../../../Inputs/Input/Input";
import ButtonMain from "../../../Buttons/ButtonMain/ButtonMain";
import SelectInput from "../../../Inputs/SelectInput/SelectInput";

//hooks
import { useAppDispatch, useAppSelector } from "../../../../../hooks/redux";

//ts
import { IDataTable } from "../../../../../ts/interfaces/main";

//redux
import {
  setModalWindowStatus,
  setModalWindowInfo,
} from "../../../../../redux/App/app";

//db
import { countries } from "../../../../../db/modals/modalMainTableData/modalMainTableData";

import { ENameFieldsInvoiceAddeess } from "../enums";
import { validation } from "./InvoiceAddeessValidation";

type TInvoiceAddeessProps = {
  setStep: Function;
};
const InvoiceAddeess = ({ setStep }: TInvoiceAddeessProps) => {
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
        company: data?.company,
        name: data?.name,
        additional: data?.additional,
        street: data?.street,
        postalCode: data?.postalCode,
        country: data?.country,
      })
    );

    setStep((prev: number) => prev + 1);
  };

  useEffect(() => {
    if (modalWindowInfo) {
      modalWindowInfo?.company &&
        setValue(ENameFieldsInvoiceAddeess.company, modalWindowInfo?.company);
      modalWindowInfo?.name &&
        setValue(ENameFieldsInvoiceAddeess.name, modalWindowInfo?.name);
      modalWindowInfo?.additional &&
        setValue(
          ENameFieldsInvoiceAddeess.additional,
          modalWindowInfo?.additional
        );
      modalWindowInfo?.street &&
        setValue(ENameFieldsInvoiceAddeess.street, modalWindowInfo?.street);
      modalWindowInfo?.postalCode &&
        setValue(
          ENameFieldsInvoiceAddeess.postalCode,
          modalWindowInfo?.postalCode
        );
      modalWindowInfo?.country &&
        setValue(ENameFieldsInvoiceAddeess.country, modalWindowInfo?.country);
    }
  }, [modalWindowInfo]);

  return (
    <>
      <ModalTitle title="Invoice Address" />
      <ModalBody>
        <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
          <Input
            id={ENameFieldsInvoiceAddeess.company}
            name={ENameFieldsInvoiceAddeess.company}
            label="Company"
            required
            error={errors?.[ENameFieldsInvoiceAddeess.company]}
            register={register}
            className={s.input}
            validation={validations.company}
          />
          <Input
            marginTop={"3.28px"}
            id={ENameFieldsInvoiceAddeess.name}
            name={ENameFieldsInvoiceAddeess.name}
            label="Name"
            required
            error={errors?.[ENameFieldsInvoiceAddeess.name]}
            register={register}
            className={s.input}
            validation={validations.name}
          />
          <Input
            marginTop={"3.28px"}
            id={ENameFieldsInvoiceAddeess.additional}
            name={ENameFieldsInvoiceAddeess.additional}
            label="Additional"
            error={errors?.[ENameFieldsInvoiceAddeess.additional]}
            register={register}
            className={s.input}
            validation={validations.additional}
          />
          <Input
            marginTop={"3.28px"}
            id={ENameFieldsInvoiceAddeess.street}
            name={ENameFieldsInvoiceAddeess.street}
            label="Street"
            error={errors?.[ENameFieldsInvoiceAddeess.street]}
            register={register}
            className={s.input}
            validation={validations.street}
          />
          <Input
            marginTop={"3.28px"}
            id={ENameFieldsInvoiceAddeess.postalCode}
            name={ENameFieldsInvoiceAddeess.postalCode}
            label="Postal Code"
            error={errors?.[ENameFieldsInvoiceAddeess.postalCode]}
            register={register}
            className={s.input}
            validation={validations.postalCode}
          />

          <SelectInput
            marginTop={"3.28px"}
            label="Country"
            defaultOption={""}
            options={countries}
            register={register}
            setValue={setValue}
            name={ENameFieldsInvoiceAddeess?.country}
            error={errors?.month}
            className={s.input}
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
            <ButtonMain content="Next" mode="fullGreen" maxWidth="53px" />
          </div>
        </form>
      </ModalBody>
    </>
  );
};

export default InvoiceAddeess;
