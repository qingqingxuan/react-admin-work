import { createContext } from "react";

type SideBarFoldStatusType = {
  foldStatus: boolean;
  setFoldStatus: (newStatus: boolean) => void;
};

type SideBarThemeType = {
  theme: "light" | "dark";
  setSideBarTheme: (theme: "light" | "dark") => void;
};

export const SideBarFoldStatusComp = createContext({} as SideBarFoldStatusType);

export const SideBarThemeComp = createContext({
  theme: "dark",
} as SideBarThemeType);
