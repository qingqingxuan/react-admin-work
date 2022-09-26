import { AppSettingContext } from "@/store/app-setting";
import { useContext } from "react";
import Logo from "../logo";
import sideBarStyle from "./style/index.module.less";
import VerticalMenu from "./VerticalMenu";
export default function SideBar() {
  const { state } = useContext(AppSettingContext);
  return (
    <div
      className={[
        sideBarStyle["side-bar-wrapper"],
        state.sideBarFoldedStatus
          ? sideBarStyle["side-bar-fold-status"]
          : sideBarStyle["side-bar-unfold-status"],
        sideBarStyle[`side-bar-${state.sideBarThemeType}-theme`],
      ].join(" ")}
    >
      <Logo />
      <VerticalMenu />
    </div>
  );
}
