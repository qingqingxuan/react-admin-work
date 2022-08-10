import { ReactNode } from "react";
import headerBarStyle from "./index.module.less";

interface HeaderPropsType {
  children: ReactNode;
}

export default function Header({ children }: HeaderPropsType) {
  return <div className={headerBarStyle["header-wrapper"]}>{children}</div>;
}
