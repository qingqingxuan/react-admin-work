import { ReactNode, useContext } from "react";
import { SideBarFoldStatusComp } from "../../store/context";
import mainStyle from "./index.module.less";

interface MainPropsType {
  children: ReactNode;
}

export default function MainContent({ children }: MainPropsType) {
  const { foldStatus } = useContext(SideBarFoldStatusComp);
  return (
    <div
      className={[
        mainStyle["main-wrapper"],
        foldStatus ? mainStyle["fold-status"] : mainStyle["unfold-status"],
      ].join(" ")}
    >
      {children}
    </div>
  );
}
