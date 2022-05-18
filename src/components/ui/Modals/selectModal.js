import ModalMainTableData from "./ModalMainTableData/ModalMainTableData";

//ts
import { EModalType } from "../../../ts/enums/modals";

export const selectModal = (type) => {
  switch (type) {
    case EModalType.mainTableData:
      return <ModalMainTableData />;
    default:
      throw new Error("No one modals type didn`t select");
  }
};
