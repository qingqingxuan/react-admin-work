import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Menu, MenuProps } from "antd";
import verticalMenuStyle from "./style/vertical-menu.module.less";
import { Scrollbars } from "react-custom-scrollbars";
import { useContext } from "react";
import { SideBarFoldStatusComp, SideBarThemeComp } from "@/store/context";

const items: MenuProps["items"] = [
  {
    label: "Navigation One",
    key: "mail",
    icon: <MailOutlined />,
  },
  {
    label: "Navigation Two",
    key: "app",
    icon: <AppstoreOutlined />,
  },
  {
    label: "Navigation Three - Submenu",
    key: "SubMenu",
    icon: <SettingOutlined />,
    children: [
      {
        label: "Option 1",
        key: "setting:1",
      },
      {
        label: "Option 2",
        key: "setting:2",
      },
      {
        label: "Option 3",
        key: "setting:3",
      },
      {
        label: "Option 4",
        key: "setting:4",
      },
    ],
  },
  {
    label: (
      <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
        Navigation Four - Link
      </a>
    ),
    icon: <AppstoreOutlined />,
    key: "alipay",
  },
];

export default function VerticalMenu() {
  const { foldStatus } = useContext(SideBarFoldStatusComp);
  const { theme } = useContext(SideBarThemeComp);
  return (
    <>
      <Scrollbars style={{ flex: 1, overflowX: "hidden" }}>
        <Menu
          items={items}
          mode="inline"
          inlineCollapsed={foldStatus}
          theme={theme}
        />
      </Scrollbars>
    </>
  );
}
