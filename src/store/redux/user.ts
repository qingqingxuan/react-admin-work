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
  payload: IUserInfo;
}

function getDefaultUserInfo() {
  const localUserInfo = localStorage.getItem("user-info");
  const originInfo = {
    userId: "",
    userName: "",
    nickName: "",
    roleId: 0,
    token: "",
    isLogined: false,
  };
  return localUserInfo ? JSON.parse(localUserInfo || "{}") : originInfo;
}

export const initUserInfo: IUserInfo = getDefaultUserInfo();

export const saveInfoAction = (state: IUserInfo) => ({
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
      const mergeData: IUserInfo = {
        ...state,
        ...(action.payload ?? {}),
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
