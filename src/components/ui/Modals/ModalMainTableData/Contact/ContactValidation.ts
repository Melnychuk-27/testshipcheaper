import { ENameFieldsContact } from "../enums";

//utils
import { regExEmail } from "../../../../../utils/generals/regExp";

export const validation = () => {
  return {
    [ENameFieldsContact.fax]: {
      maxLength: {
        value: 100,
        message: "Максимальна кількість символьів 100",
      },
    },
    [ENameFieldsContact.email]: {
      maxLength: {
        value: 100,
        message: "Максимальна кількість символьів 100",
      },
      pattern: {
        value: regExEmail,
        message: "Не валідний email",
      },
    },
    [ENameFieldsContact.homepage]: {
      maxLength: {
        value: 100,
        message: "Максимальна кількість символьів 100",
      },
    },
  };
};
