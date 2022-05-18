import { createSlice, PayloadAction } from "@reduxjs/toolkit";

//ts
import { IDataTable } from "../../ts/interfaces/main";

//db
import { tableData } from "../../db/main/main";

type TbasketState = {
  dataTable: IDataTable[];
};

const initialState: TbasketState = {
  dataTable: tableData,
};

export const main = createSlice({
  name: "main",
  initialState,
  reducers: {
    addNewItemInTable(state, action: PayloadAction<IDataTable>) {
      state.dataTable = [...state.dataTable, action.payload];
    },

    deleteItemInTable(state, action: PayloadAction<number>) {
      state.dataTable = state.dataTable.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

export const { addNewItemInTable, deleteItemInTable } = main.actions;

export default main.reducer;
