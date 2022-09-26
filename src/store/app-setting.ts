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
  payload: Partial<AppSettingState>;
}

export interface IAppSettingContext {
  state: AppSettingState;
  dispatch: Dispatch<AppSettingAction>;
}

export const TOGGLE_SIDE_BAR_STATUS = "toggle-side-bar-status";
export const TOGGLE_SIDE_BAR_THEME_STATUS = "toggle-side-bar-theme-status";

export function appSettingReducer(
  state: AppSettingState,
  action: AppSettingAction
) {
  switch (action.type) {
    case TOGGLE_SIDE_BAR_STATUS:
    case TOGGLE_SIDE_BAR_THEME_STATUS:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return {
        ...state,
      };
  }
}

export const initAppSettingState: AppSettingState = {
  sideBarThemeType: SideBarThemeType.DARK,
  sideBarFoldedStatus: false,
};

export const AppSettingContext = React.createContext<IAppSettingContext>({
  state: initAppSettingState,
  dispatch: () => {},
});
