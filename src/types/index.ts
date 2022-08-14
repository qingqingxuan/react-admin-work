export interface OriginMenuType {
  menuUrl: string;
  menuName: string;
  routeName: string;
  icon: string;
  parentPath: string;
  children: OriginMenuType[];
}

export interface UserInfoType {
  userName: string;
  nickName: string;
  roleId: number;
  userId: number;
  token: string;
}
