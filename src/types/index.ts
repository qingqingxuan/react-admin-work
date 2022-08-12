export interface OriginMenuType {
  menuUrl: string;
  menuName: string;
  routeName: string;
  icon: string;
  parentPath: string;
  children: OriginMenuType[];
}
