import React, { Dispatch } from "react";

const SAVE_INFO_ACTION = "SAVE_INFO";
const LOGOUT_ACTION = "LOGOUT";

export interface IUserInfo {
  userId: string | number;
  userName: string;
  nickName: string;
  roleId: number;
  token: string;
  isLogined: boolean;
}

export interface IUserInfoAction {
  type: string;
  payload: Partial<IUserInfo>;
}

export const initUserInfo: IUserInfo = {
  userName: "",
  userId: "",
  nickName: "",
  roleId: 0,
  token: "",
  isLogined: false,
};

export const saveInfoAction = (state: Partial<IUserInfo>) => ({
  type: SAVE_INFO_ACTION,
  payload: state,
});

export const logoutAction = () => ({
  type: LOGOUT_ACTION,
  payload: initUserInfo,
});

export const userInfoReducer = (state: IUserInfo, action: IUserInfoAction) => {
  switch (action.type) {
    case SAVE_INFO_ACTION:
      const mergeData = {
        ...state,
        ...(action.payload ?? {}),
        isLogined: true,
      };
      localStorage.setItem("user-info", JSON.stringify(mergeData));
      return mergeData;
    case LOGOUT_ACTION:
      return {
        ...action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export const UserInfoContext = React.createContext<{
  userInfo: IUserInfo;
  dispatch: Dispatch<IUserInfoAction>;
}>({ userInfo: initUserInfo, dispatch: () => {} });
