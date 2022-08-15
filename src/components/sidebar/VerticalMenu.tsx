import { Menu } from "antd";
import { Scrollbars } from "react-custom-scrollbars";
import { useContext, useEffect, useState } from "react";
import { SideBarFoldStatusComp, SideBarThemeComp } from "@/store/context";
import { PermissionContext } from "@/store/redux/permission";
import { ItemType } from "antd/lib/menu/hooks/useItems";
import { useLocation, useNavigate } from "react-router-dom";

export default function VerticalMenu() {
  const { foldStatus } = useContext(SideBarFoldStatusComp);
  const { sidebarTheme } = useContext(SideBarThemeComp);
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
    if (foldStatus) {
      setOpenKeys([]);
    } else {
      setOpenKeys(defaultOpenKeys);
    }
  }, [foldStatus]);
  return (
    <Scrollbars style={{ flex: 1, overflowX: "hidden" }}>
      <Menu
        items={state.menus}
        mode="inline"
        inlineCollapsed={foldStatus}
        theme={sidebarTheme}
        onClick={onMenuItemClick}
        onOpenChange={onOpenChange}
        openKeys={foldStatus ? [] : openKeys}
        defaultSelectedKeys={[location.pathname]}
      />
    </Scrollbars>
  );
}
