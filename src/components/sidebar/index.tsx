import { useContext } from "react";
import { SideBarFoldStatusComp, SideBarThemeComp } from "../../store/context";
import Logo from "../logo";
import sideBarStyle from "./style/index.module.less";
import VerticalMenu from "./VerticalMenu";
export default function SideBar() {
  const { foldStatus } = useContext(SideBarFoldStatusComp);
  const { theme } = useContext(SideBarThemeComp);
  return (
    <div
      className={[
        sideBarStyle["side-bar-wrapper"],
        foldStatus
          ? sideBarStyle["side-bar-fold-status"]
          : sideBarStyle["side-bar-unfold-status"],
        sideBarStyle[`side-bar-${theme}-theme`],
      ].join(" ")}
    >
      <Logo />
      <VerticalMenu />
    </div>
  );
}
