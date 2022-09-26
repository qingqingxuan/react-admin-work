import { post } from "@/api/http";
import { getMenuListByRoleId } from "@/api/url";
import {
  initPermissionAction,
  PermissionContext,
  RouteItemType,
} from "@/store/permission";
import { UserInfoContext } from "@/store/user";
import { OriginMenuType } from "@/types";
import NoFountPage from "@/views/404";
import React, { useEffect, useContext, useState } from "react";
import { Navigate, useRoutes } from "react-router-dom";
import Layout from "./Layout";
import LazyLoading from "./lazy";
import { mapDataToMenu, mapDataToRoutes } from "./utils";

const PermissionRoutes: React.FC = () => {
  const { state } = useContext(PermissionContext);
  const routeTable: RouteItemType[] = [];
  if (state.permissions.length > 0) {
    const rootRoute: RouteItemType = {
      path: "/",
      element: <Layout />,
      children: state.permissions,
    };
    const emptyRoute: RouteItemType = {
      path: "*",
      element: <NoFountPage />,
    };
    routeTable.push(rootRoute, emptyRoute);
  }
  const routes = useRoutes(routeTable);
  return routes;
};

const Auth: React.FC = () => {
  const { userInfo } = useContext(UserInfoContext);
  if (!userInfo.isLogined) {
    return userInfo.isJupmLoginPage ? (
      <React.Fragment />
    ) : (
      <Navigate to={"/login"} replace />
    );
  }
  const { state, dispath } = useContext(PermissionContext);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    (async () => {
      if (userInfo.isLogined && state.isEmptyPermission) {
        try {
          setLoading(true);
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
        } finally {
          setLoading(false);
        }
      }
    })();
  }, []);
  return loading ? <LazyLoading /> : <PermissionRoutes />;
};

export default Auth;
