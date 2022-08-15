import { createContext } from "react";

type SideBarFoldStatusType = {
  foldStatus: boolean;
  setFoldStatus: (newStatus: boolean) => void;
};

export enum SideThemeType {
  LIGHT = "light",
  DARK = "dark",
}

type SideBarThemeType = {
  sidebarTheme: SideThemeType;
  setSideBarTheme: (theme: SideThemeType) => void;
};

export const SideBarFoldStatusComp = createContext({} as SideBarFoldStatusType);

export const SideBarThemeComp = createContext({
  sidebarTheme: SideThemeType.DARK,
} as SideBarThemeType);
