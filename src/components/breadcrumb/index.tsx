import { PermissionContext } from "@/store/permission";
import { Breadcrumb } from "antd";
import { ItemType } from "antd/lib/menu/hooks/useItems";
import { useContext } from "react";
import { useLocation } from "react-router-dom";

function mapPathToBreadItems(
  path: string,
  menus: ItemType[],
  result: ItemType[]
) {
  for (let index = 0; index < menus.length; index++) {
    const item = menus[index];
    if (item?.key === path) {
      result.push(item);
      break;
    } else if ((item as any).children) {
      mapPathToBreadItems(path, (item as any).children, result);
    }
  }
}

const MyBreadcrumb: React.FC = () => {
  const { state } = useContext(PermissionContext);
  const location = useLocation();
  const tempPaths = location.pathname
    .split("/")
    .filter(Boolean)
    .map((it) => "/" + it);
  const paths = tempPaths.map((it, index) => {
    return tempPaths.slice(0, index + 1).join("");
  });
  const resultItems: ItemType[] = [];
  paths.forEach((it) => {
    mapPathToBreadItems(it, state.menus!, resultItems);
  });

  const breadcrumbItems = resultItems.map((it) => {
    return (
      <Breadcrumb.Item key={it?.key}>
        {it ? (it as any).label : ""}
      </Breadcrumb.Item>
    );
  });
  return (
    <Breadcrumb style={{ marginLeft: "10px" }}>{breadcrumbItems}</Breadcrumb>
  );
};

export default MyBreadcrumb;
