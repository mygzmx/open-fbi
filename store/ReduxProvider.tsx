"use client";
import { Provider } from "react-redux";
import store from "@/store";
import { ReactNode } from "react";

type IProps = {
  children: ReactNode;
}
export function ReduxProvider({ children }: IProps) {
  return <Provider store={store}>{children}</Provider>;
}
