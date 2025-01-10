"use client";
import { createSlice, PayloadAction, SliceCaseReducers } from "@reduxjs/toolkit";
import { EDevice, IAppStore } from "@/store/index.interfaces";

export const appSlice = createSlice({
  name: 'app',
  initialState: (): IAppStore => ({
    device: EDevice.mobile,
  }),
  reducers: {
    setDevice: (state, action: PayloadAction<EDevice>) => {
      state.device = action.payload;
    },
  }
});

export const { setDevice } = appSlice.actions;

export const appReducer = appSlice.reducer;
