import { Navigate, Outlet } from "react-router-dom";
import SideBar from "./sidebar";
import layoutStyle from "./Layout.module.less";
import MainContent from "./main";
import NavBar from "./navbar";
import Header from "./header";
import { useContext } from "react";
import { UserInfoContext } from "@/store/user";
import PageIntro from "./PageIntro";

export default function Layout() {
  const { userInfo } = useContext(UserInfoContext);
  return userInfo.isLogined ? (
    <div className={layoutStyle["layout-wrapper"]}>
      <SideBar></SideBar>
      <MainContent>
        <Header>
          <NavBar></NavBar>
        </Header>
        <PageIntro />
        <div>
          <Outlet></Outlet>
        </div>
      </MainContent>
    </div>
  ) : (
    <Navigate to={"/login"}></Navigate>
  );
}
