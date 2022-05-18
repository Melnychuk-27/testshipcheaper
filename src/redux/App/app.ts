import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TInitialState = {
  modalWindowStatus: boolean;
  modalWindowChildrenType: string;
  modalWindowInfo: any;
};
const initialState: TInitialState = {
  modalWindowStatus: false,
  modalWindowChildrenType: "",
  modalWindowInfo: null,
};

export const app = createSlice({
  name: "app",
  initialState,
  reducers: {
    setModalWindowChildrenType: (state, action: PayloadAction<string>) => {
      state.modalWindowChildrenType = action.payload;
    },
    setModalWindowStatus: (state, action: PayloadAction<boolean>) => {
      state.modalWindowStatus = action.payload;
    },
    setModalWindowInfo: (state, action) => {
      state.modalWindowInfo = action.payload;
    },
  },
});

export const {
  setModalWindowStatus,
  setModalWindowChildrenType,
  setModalWindowInfo,
} = app.actions;

export default app.reducer;
