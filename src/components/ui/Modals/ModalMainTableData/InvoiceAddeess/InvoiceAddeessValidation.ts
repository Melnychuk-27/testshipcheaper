import { ENameFieldsInvoiceAddeess } from "../enums";

export const validation = () => {
  return {
    [ENameFieldsInvoiceAddeess.company]: {
      required: "Поле обов'язкове до заповнення",
      maxLength: {
        value: 100,
        message: "Максимальна кількість символьів 100",
      },
    },
    [ENameFieldsInvoiceAddeess.name]: {
      required: "Поле обов'язкове до заповнення",
      maxLength: {
        value: 100,
        message: "Максимальна кількість символьів 100",
      },
    },
    [ENameFieldsInvoiceAddeess.street]: {
      maxLength: {
        value: 100,
        message: "Максимальна кількість символьів 100",
      },
    },
    [ENameFieldsInvoiceAddeess.postalCode]: {
      maxLength: {
        value: 100,
        message: "Максимальна кількість символьів 100",
      },
    },
    [ENameFieldsInvoiceAddeess.additional]: {
      maxLength: {
        value: 100,
        message: "Максимальна кількість символьів 100",
      },
    },
  };
};
