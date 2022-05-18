import { ENameFieldsBankData } from "../enums";

export const validation = () => {
  return {
    [ENameFieldsBankData.iban]: {
      required: "Поле обов'язкове до заповнення",
      maxLength: {
        value: 100,
        message: "Максимальна кількість символьів 100",
      },
    },
    [ENameFieldsBankData.bic]: {
      required: "Поле обов'язкове до заповнення",
      maxLength: {
        value: 100,
        message: "Максимальна кількість символьів 100",
      },
    },
    [ENameFieldsBankData.bankName]: {
      required: "Поле обов'язкове до заповнення",
      maxLength: {
        value: 100,
        message: "Максимальна кількість символьів 100",
      },
    },
  };
};
