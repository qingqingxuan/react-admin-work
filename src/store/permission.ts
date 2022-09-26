import { MenuProps } from "antd";
import React, { Dispatch } from "react";
import { RouteObject } from "react-router-dom";

export interface IPermissionContext {
  state: IPermissionState;
  dispath: Dispatch<IPermissionAction>;
}

export interface IPermissionAction {
  type: string;
  payload: IPermissionState;
}

export interface IPermissionState {
  isEmptyPermission: boolean;
  permissions: Array<RouteItemType>;
  menus: MenuProps["items"];
}

export interface RouteItemType extends RouteObject {
  meta?: Record<string, any>;
}

export const initPermissionState: IPermissionState = {
  isEmptyPermission: true,
  permissions: [],
  menus: [],
};

export const initPermissionAction = (state: IPermissionState) => ({
  type: "init",
  payload: state,
});

export function permissionReducer(
  state: IPermissionState,
  action: IPermissionAction
) {
  switch (action.type) {
    case "init":
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

export const PermissionContext = React.createContext<IPermissionContext>({
  state: initPermissionState,
  dispath: () => {},
});
