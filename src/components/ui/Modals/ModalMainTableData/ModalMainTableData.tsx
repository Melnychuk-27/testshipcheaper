import { useState } from "react";
import { useForm } from "react-hook-form";

//styles
import s from "./modalMainTableData.module.scss";

//components
import ModalClose from "../ModalComponents/ModalClose/ModalClose";
import InvoiceAddeess from "./InvoiceAddeess/InvoiceAddeess";
import BankData from "./BankData/BankData";
import Contact from "./Contact/Contact";

const ModalMainTableData = () => {
  const [step, setStep] = useState(1);

  const fStepComponents = (step: number) => {
    switch (step) {
      case 1:
        return <InvoiceAddeess setStep={setStep} />;
      case 2:
        return <BankData setStep={setStep} />;
      case 3:
        return <Contact setStep={setStep} />;

      default:
        return <></>;
    }
  };

  return (
    <div className={s.root}>
      <ModalClose />
      {fStepComponents(step)}
    </div>
  );
};

export default ModalMainTableData;

// ENameFieldsBankData,
// ENameFieldsContact,
