import React from "react";
import { Dispatch } from "react";
export enum SideBarThemeType {
  LIGHT = "light",
  DARK = "dark",
}

export interface AppSettingState {
  sideBarThemeType: SideBarThemeType;
  sideBarFoldedStatus: boolean;
}

export interface AppSettingAction {
  type: string;
  payload: AppSettingState;
}

export interface IAppSettingContext {
  state: AppSettingState;
  dispatch: Dispatch<AppSettingAction>;
}

export function appSettingReducer(
  state: AppSettingState,
  action: AppSettingAction
) {}

export const AppSettingContext = React.createContext<IAppSettingContext>({
  state: {
    sideBarThemeType: SideBarThemeType.DARK,
    sideBarFoldedStatus: false,
  },
  dispatch: () => {},
});
