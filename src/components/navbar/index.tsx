import navBarStyle from "./index.module.less";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  LogoutOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Avatar, Card, Divider, Dropdown, Menu, MenuProps, Modal } from "antd";
import React, { useContext, useState } from "react";
import { SideBarFoldStatusComp } from "../../store/context";
import {
  IUserInfoAction,
  logoutAction,
  UserInfoContext,
} from "@/store/redux/user";
import { ItemType } from "antd/lib/menu/hooks/useItems";
import { useNavigate } from "react-router-dom";
import AppSetting from "../setting";
import MyBreadcrumb from "../breadcrumb";
import Toolbar from "../toolbar";

const ToggleBar: React.FC = () => {
  const { foldStatus, setFoldStatus } = useContext(SideBarFoldStatusComp);
  function onMenuClick() {
    setFoldStatus(!foldStatus);
  }
  return (
    <>
      {foldStatus ? (
        <MenuFoldOutlined
          onClick={onMenuClick}
          style={{ fontSize: "16px", cursor: "pointer" }}
        />
      ) : (
        <MenuUnfoldOutlined
          onClick={onMenuClick}
          style={{ fontSize: "16px", cursor: "pointer" }}
        />
      )}
    </>
  );
};

const ListMenu: React.FC<{ dispatch: React.Dispatch<IUserInfoAction> }> = ({
  dispatch,
}) => {
  const menuItems: ItemType[] = [
    {
      key: "userInfo",
      label: "个人中心",
      icon: <UserOutlined />,
    },
    {
      key: "logout",
      label: "退出登录",
      icon: <LogoutOutlined />,
    },
  ];
  const navigate = useNavigate();
  const [modal, contextHolder] = Modal.useModal();
  const onMenuClick: MenuProps["onClick"] = ({ key }) => {
    if (key === "logout") {
      modal.confirm({
        title: "提示",
        content: "确定要退出当前账号吗？",
        cancelText: "取消",
        okText: "退出",
        onOk: () => {
          dispatch(logoutAction());
          navigate("/login", { replace: true });
        },
      });
    }
  };
  return (
    <>
      <Menu onClick={onMenuClick} items={menuItems} />
      {contextHolder}
    </>
  );
};

const UserInfo: React.FC = () => {
  const { userInfo, dispatch } = useContext(UserInfoContext);
  return (
    <>
      <Dropdown arrow overlay={<ListMenu dispatch={dispatch} />}>
        <div
          style={{
            display: "inline-flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            marginLeft: "10px",
          }}
        >
          <Avatar size={30} icon={<UserOutlined />} />
          <span style={{ marginLeft: "5px", fontSize: "16px" }}>
            {userInfo.userName}
          </span>
        </div>
      </Dropdown>
    </>
  );
};

export default function NavBar() {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Card bordered={false} bodyStyle={{ padding: 0 }}>
        <div className={navBarStyle["nav-bar-wrapper"]}>
          <ToggleBar />
          <MyBreadcrumb />
          <div style={{ flex: 1 }}></div>
          <Toolbar />
          <Divider type="vertical" />
          <UserInfo />
          <Divider type="vertical" />
          <SettingOutlined
            onClick={() => setVisible(true)}
            style={{ fontSize: "16px" }}
            className={navBarStyle["setting-icon"]}
          />
        </div>
      </Card>
      <AppSetting {...{ visible, setVisible }} />
    </>
  );
}
