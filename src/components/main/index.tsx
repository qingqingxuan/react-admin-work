import { AppSettingContext } from "@/store/app-setting";
import { ReactNode, useContext } from "react";
import mainStyle from "./index.module.less";

interface MainPropsType {
  children: ReactNode;
}

export default function MainContent({ children }: MainPropsType) {
  const { state } = useContext(AppSettingContext);
  return (
    <div
      className={[
        mainStyle["main-wrapper"],
        state.sideBarFoldedStatus
          ? mainStyle["fold-status"]
          : mainStyle["unfold-status"],
      ].join(" ")}
    >
      {children}
    </div>
  );
}
