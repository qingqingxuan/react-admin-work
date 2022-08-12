import { post } from "@/api/http";
import { getMenuListByRoleId } from "@/api/url";
import {
  initPermissionAction,
  PermissionContext,
} from "@/store/redux/permission";
import { UserInfoContext } from "@/store/redux/user";
import { OriginMenuType } from "@/types";
import React, { useEffect, useContext } from "react";
import { useRoutes } from "react-router-dom";
import LazyLoading from "./lazy";
import { mapDataToRoutes } from "./utils";

const PermissionRoutes: React.FC = () => {
  const { state } = useContext(PermissionContext);
  const routes = useRoutes(state.permissions);
  console.log(state);

  return routes;
};

const Auth: React.FC = () => {
  const { state, dispath } = useContext(PermissionContext);
  const { userInfo } = useContext(UserInfoContext);
  useEffect(() => {
    (async () => {
      if (state.isEmptyPermission) {
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
          })
        );
      }
    })();
  }, []);
  return state.isEmptyPermission ? <LazyLoading /> : <PermissionRoutes />;
};

export default Auth;
