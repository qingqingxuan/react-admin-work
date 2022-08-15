import { SideBarThemeComp, SideThemeType } from "@/store/context";
import {
  FullscreenOutlined,
  MessageOutlined,
  ReloadOutlined,
} from "@ant-design/icons";
import { Space } from "antd";
import { useContext } from "react";
import ToolbarStyle from "./index.module.less";

const Toolbar: React.FC = () => {
  const { sidebarTheme, setSideBarTheme } = useContext(SideBarThemeComp);
  function onFullscreenClick() {
    setSideBarTheme(
      sidebarTheme === SideThemeType.LIGHT
        ? SideThemeType.DARK
        : SideThemeType.LIGHT
    );
  }
  return (
    <Space size={"large"}>
      <FullscreenOutlined
        className={ToolbarStyle["icon-style"]}
        onClick={onFullscreenClick}
      />
      <ReloadOutlined className={ToolbarStyle["icon-style"]} />
      <MessageOutlined className={ToolbarStyle["icon-style"]} />
    </Space>
  );
};

export default Toolbar;
