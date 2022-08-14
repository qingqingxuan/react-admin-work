import logoStyle from "./index.module.less";
import logoImage from "@/assets/react.svg";
import { useContext } from "react";
import { SideBarFoldStatusComp } from "@/store/context";

export default function Logo() {
  const { foldStatus } = useContext(SideBarFoldStatusComp);
  return (
    <div className={logoStyle["logo-wrapper"]}>
      <img src={logoImage} />
      <span
        className={[
          logoStyle["title"],
          foldStatus
            ? logoStyle["fold-logo-title"]
            : logoStyle["unfold-logo-title"],
        ].join(" ")}
      >
        React Admin Work
      </span>
    </div>
  );
}
