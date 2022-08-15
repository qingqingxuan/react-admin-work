import { Navigate, Outlet } from "react-router-dom";
import SideBar from "./sidebar";
import layoutStyle from "./Layout.module.less";
import MainContent from "./main";
import NavBar from "./navbar";
import Header from "./header";
import {
  SideBarFoldStatusComp,
  SideBarThemeComp,
  SideThemeType,
} from "@/store/context";
import { useContext, useState } from "react";
import { UserInfoContext } from "@/store/redux/user";

export default function Layout() {
  const [foldStatus, setFoldStatus] = useState(false);
  const [sidebarTheme, setSideBarTheme] = useState(SideThemeType.DARK);
  const { userInfo } = useContext(UserInfoContext);
  return userInfo.isLogined ? (
    <SideBarFoldStatusComp.Provider value={{ foldStatus, setFoldStatus }}>
      <SideBarThemeComp.Provider value={{ sidebarTheme, setSideBarTheme }}>
        <div className={layoutStyle["layout-wrapper"]}>
          <SideBar></SideBar>
          <MainContent>
            <Header>
              <NavBar></NavBar>
              {/* <TabBar></TabBar> */}
            </Header>
            <div>
              <Outlet></Outlet>
            </div>
          </MainContent>
        </div>
      </SideBarThemeComp.Provider>
    </SideBarFoldStatusComp.Provider>
  ) : (
    <Navigate to={"/login"}></Navigate>
  );
}
