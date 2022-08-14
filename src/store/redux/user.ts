import React, { Dispatch } from "react";

const LOCAL_STORAGE_KEY = "user-info";

const SAVE_INFO_ACTION = "SAVE_INFO";
const LOGOUT_ACTION = "LOGOUT";
const JUPM_LOGIN_PAGE_ACTION = "JUPM_LOGIN_PAGE";

export interface IUserInfo {
  userId?: string | number;
  userName?: string;
  nickName?: string;
  roleId?: number;
  token?: string;
  isLogined?: boolean;
  isJupmLoginPage?: boolean;
}

export interface IUserInfoAction {
  type: string;
  payload: IUserInfo;
}

function getDefaultUserInfo() {
  const localUserInfo = localStorage.getItem(LOCAL_STORAGE_KEY);
  const originInfo = {
    userId: "",
    userName: "",
    nickName: "",
    roleId: 0,
    token: "",
    isLogined: false,
    isJupmLoginPage: false,
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

export const jumpLoginPageAction = () => ({
  type: JUPM_LOGIN_PAGE_ACTION,
  payload: { isJupmLoginPage: true },
});

export const userInfoReducer = (state: IUserInfo, action: IUserInfoAction) => {
  switch (action.type) {
    case SAVE_INFO_ACTION:
      const mergeData: IUserInfo = {
        ...state,
        ...(action.payload ?? {}),
      };
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(mergeData));
      return mergeData;
    case LOGOUT_ACTION:
    case JUPM_LOGIN_PAGE_ACTION:
      localStorage.removeItem(LOCAL_STORAGE_KEY);
      return {
        ...initUserInfo,
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
