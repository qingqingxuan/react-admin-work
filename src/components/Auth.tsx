import { post } from "@/api/http";
import { getMenuListByRoleId } from "@/api/url";
import {
  initPermissionAction,
  PermissionContext,
  RouteItemType,
} from "@/store/redux/permission";
import { UserInfoContext } from "@/store/redux/user";
import { OriginMenuType } from "@/types";
import React, { useEffect, useContext } from "react";
import { Navigate, useRoutes } from "react-router-dom";
import Layout from "./Layout";
import LazyLoading from "./lazy";
import { mapDataToMenu, mapDataToRoutes } from "./utils";

const PermissionRoutes: React.FC = () => {
  const { state } = useContext(PermissionContext);
  const rootRoute: RouteItemType = {
    path: "/",
    element: <Layout />,
    children: state.permissions,
  };
  const routes = useRoutes([rootRoute]);
  return routes;
};

const Auth: React.FC = () => {
  const { userInfo } = useContext(UserInfoContext);
  if (!userInfo.isLogined) {
    return userInfo.isJupmLoginPage ? (
      <div></div>
    ) : (
      <Navigate to={"/login"} replace />
    );
  }
  const { state, dispath } = useContext(PermissionContext);
  useEffect(() => {
    (async () => {
      if (userInfo.isLogined && state.isEmptyPermission) {
        const result = await post<OriginMenuType[]>({
          url: getMenuListByRoleId,
          data: {
            userId: userInfo.userId,
            roleId: userInfo.roleId,
          },
        });
        const menuData = result.data;
        dispath(
          initPermissionAction({
            isEmptyPermission: !(
              menuData &&
              Array.isArray(menuData) &&
              menuData.length > 0
            ),
            permissions: mapDataToRoutes(menuData),
            menus: mapDataToMenu(menuData),
          })
        );
      }
    })();
  }, []);
  return userInfo.isLogined ? <PermissionRoutes /> : <LazyLoading />;
};

export default Auth;
