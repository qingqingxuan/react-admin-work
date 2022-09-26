import logoStyle from "./index.module.less";
import logoImage from "@/assets/react.svg";
import { useContext } from "react";
import { AppSettingContext } from "@/store/app-setting";

export default function Logo() {
  const { state } = useContext(AppSettingContext);
  return (
    <div className={logoStyle["logo-wrapper"]}>
      <img src={logoImage} />
      <span
        className={[
          logoStyle["title"],
          state.sideBarFoldedStatus
            ? logoStyle["fold-logo-title"]
            : logoStyle["unfold-logo-title"],
          logoStyle["logo-" + state.sideBarThemeType + "-theme"],
        ].join(" ")}
      >
        React Admin Work
      </span>
    </div>
  );
}
