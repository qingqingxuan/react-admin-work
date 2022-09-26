import { Menu } from "antd";
import { Scrollbars } from "react-custom-scrollbars";
import { useContext, useEffect, useState } from "react";
import { PermissionContext } from "@/store/permission";
import { ItemType } from "antd/lib/menu/hooks/useItems";
import { useLocation, useNavigate } from "react-router-dom";
import { AppSettingContext } from "@/store/app-setting";

export default function VerticalMenu() {
  const { state: appSettingState } = useContext(AppSettingContext);
  const { state } = useContext(PermissionContext);
  const navigate = useNavigate();
  const location = useLocation();
  const paths = location.pathname
    .split("/")
    .filter(Boolean)
    .map((it) => "/" + it);
  const defaultOpenKeys = paths.map((_, index) => {
    return paths.slice(0, index + 1).join("");
  });
  const [openKeys, setOpenKeys] = useState(defaultOpenKeys);
  function onMenuItemClick(item: ItemType) {
    navigate(item!.key as string);
  }
  function onOpenChange(keys: string[]) {
    setOpenKeys(keys);
  }
  useEffect(() => {
    if (appSettingState.sideBarFoldedStatus) {
      setOpenKeys([]);
    } else {
      setOpenKeys(defaultOpenKeys);
    }
  }, [appSettingState.sideBarFoldedStatus]);
  return (
    <Scrollbars style={{ flex: 1, overflowX: "hidden" }}>
      <Menu
        items={state.menus}
        mode="inline"
        inlineCollapsed={appSettingState.sideBarFoldedStatus}
        theme={appSettingState.sideBarThemeType}
        onClick={onMenuItemClick}
        onOpenChange={onOpenChange}
        openKeys={appSettingState.sideBarFoldedStatus ? [] : openKeys}
        defaultSelectedKeys={[location.pathname]}
      />
    </Scrollbars>
  );
}
