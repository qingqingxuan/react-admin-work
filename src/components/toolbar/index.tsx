import {
  AppSettingContext,
  SideBarThemeType,
  TOGGLE_SIDE_BAR_THEME_STATUS,
} from "@/store/app-setting";
import {
  FullscreenOutlined,
  BellOutlined,
  ReloadOutlined,
} from "@ant-design/icons";
import { Badge, Space } from "antd";
import { useContext } from "react";
import ToolbarStyle from "./index.module.less";

const Toolbar: React.FC = () => {
  const { state, dispatch } = useContext(AppSettingContext);
  function onFullscreenClick() {
    dispatch({
      type: TOGGLE_SIDE_BAR_THEME_STATUS,
      payload: {
        sideBarThemeType:
          state.sideBarThemeType === SideBarThemeType.LIGHT
            ? SideBarThemeType.DARK
            : SideBarThemeType.LIGHT,
      },
    });
  }
  return (
    <Space size={"large"}>
      <FullscreenOutlined
        className={ToolbarStyle["icon-style"]}
        onClick={onFullscreenClick}
      />
      <ReloadOutlined className={ToolbarStyle["icon-style"]} />
      <Badge count={5}>
        <BellOutlined className={ToolbarStyle["icon-style"]} />
      </Badge>
    </Space>
  );
};

export default Toolbar;
