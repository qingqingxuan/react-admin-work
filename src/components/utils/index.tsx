import { RouteItemType } from "@/store/redux/permission";
import { OriginMenuType } from "@/types";
import { ComponentType, lazy, LazyExoticComponent, Suspense } from "react";
import Layout from "../Layout";
import LazyLoading from "../lazy";

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

export function mapDataToRoutes(data: OriginMenuType[]) {
  function isLayout(item: OriginMenuType) {
    return (
      item.children && Array.isArray(item.children) && item.children.length > 0
    );
  }
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
      <Layout />
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

export function mapDataToMenu() {}
