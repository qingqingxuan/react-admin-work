import { RouteItemType } from "@/store/redux/permission";
import { OriginMenuType } from "@/types";
import { MenuProps } from "antd";
import { ItemType } from "antd/lib/menu/hooks/useItems";
import React, {
  ComponentType,
  lazy,
  LazyExoticComponent,
  Suspense,
} from "react";
import Layout from "../Layout";
import LazyLoading from "../lazy";
import * as Icons from "@ant-design/icons";
import { Navigate, Outlet } from "react-router-dom";

const asyncLoadFile = import.meta.glob("/src/views/**/*.tsx");

const asyncComponents = Object.keys(asyncLoadFile).reduce((pre, cur) => {
  pre[cur.split(".")[0]] = lazy(
    asyncLoadFile[cur] as () => Promise<{ default: ComponentType }>
  );
  return pre;
}, {} as Record<string, LazyExoticComponent<ComponentType>>);

export function lazyComponent(
  AsyncComponent: LazyExoticComponent<ComponentType>,
  fallback = <LazyLoading />
) {
  return (
    <Suspense fallback={fallback}>
      <AsyncComponent />
    </Suspense>
  );
}
function isLayout(item: OriginMenuType) {
  return (
    item.children && Array.isArray(item.children) && item.children.length > 0
  );
}

export function mapDataToRoutes(data: OriginMenuType[]) {
  const routes: RouteItemType[] = [];
  data.forEach((it) => {
    const layouted = isLayout(it);
    const route: RouteItemType = {};
    route.path = it.menuUrl;
    const component = asyncComponents["/src/views" + it.menuUrl];
    if (!component && !layouted) {
      throw Error(
        `not found the path "${it.menuUrl}" for component, please to check 'src/views/' is included '${it.menuUrl}.tsx' file`
      );
    }
    route.element = layouted ? (
      <Outlet />
    ) : (
      lazyComponent(asyncComponents["/src/views" + it.menuUrl])
    );
    if (layouted) {
      route.children = mapDataToRoutes(it.children);
    }
    routes.push(route);
  });
  return routes;
}

export function mapDataToMenu(data: OriginMenuType[]) {
  const menus: MenuProps["items"] = [];
  data.forEach((it) => {
    const Icon = (Icons as Record<string, any>)[it.icon || "MenuOutlined"];
    const menu: NonNullable<ItemType> = {
      key: it.menuUrl,
      label: it.menuName,
      icon: <Icon />,
      children: isLayout(it) ? mapDataToMenu(it.children) : undefined,
    };
    menus.push(menu);
  });
  return menus;
}
