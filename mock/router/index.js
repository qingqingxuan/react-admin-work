import { getMenuList } from "@/api/url";
import Mock from "mockjs";

export const adminRoutes = [
  {
    menuUrl: "/dashborad",
    menuName: "Dashborad",
    routeName: "dashborad",
    icon: "DiffOutlined",
    parentPath: "",
    children: [
      {
        parentPath: "/dashborad",
        menuUrl: "/dashborad/home",
        menuName: "主控台",
        routeName: "home",
      },
      {
        parentPath: "/dashborad",
        menuUrl: "/dashborad/work-place",
        menuName: "工作台",
        routeName: "workPlace",
        isRootPath: true,
      },
    ],
  },
  {
    menuUrl: "/next",
    menuName: "多级菜单",
    iconPrefix: "xicon",
    icon: "DiffOutlined",
    parentPath: "",
    children: [
      {
        parentPath: "/next",
        menuUrl: "/next/menu1",
        menuName: "menu-1",
        cacheable: true,
      },
      {
        parentPath: "/next",
        menuUrl: "/next/menu2",
        menuName: "menu-2",
        children: [
          {
            parentPath: "/next/menu2",
            menuUrl: "/next/menu2/menu-2-1",
            menuName: "menu-2-1",
            children: [
              {
                parentPath: "/next/menu2/menu-2-1",
                menuUrl: "/next/menu2/menu-2-1/menu-2-1-1",
                menuName: "menu-2-1-1",
                cacheable: true,
              },
              {
                parentPath: "/next/menu2/menu-2-1",
                menuUrl: "/next/menu2/menu-2-1/menu-2-1-2",
                menuName: "menu-2-1-2",
                isRootPath: true,
              },
            ],
          },
          {
            parentPath: "/next/menu2",
            menuUrl: "/next/menu2/menu-2-2",
            menuName: "menu-2-2",
            cacheable: true,
          },
        ],
      },
    ],
  },
];
export const editorRoutes = [
  // {
  //   menuUrl: '/list',
  //   menuName: '列表页面',
  //   iconPrefix: 'xicon',
  //   icon: 'ListOutline',
  //   parentPath: '',
  //   children: [
  //     {
  //       parentPath: '/list',
  //       menuUrl: '/list/table-with-search',
  //       menuName: '表格搜索',
  //     },
  //     {
  //       parentPath: '/list',
  //       menuUrl: '/list/table-custom',
  //       menuName: '自定义表格',
  //     },
  //     {
  //       parentPath: '/list',
  //       menuUrl: '/list/list',
  //       menuName: '普通列表',
  //     },
  //     {
  //       parentPath: '/list',
  //       menuUrl: '/list/card-list',
  //       menuName: '卡片列表',
  //     },
  //   ],
  // },
  {
    menuUrl: "/other",
    menuName: "功能/组件",
    iconPrefix: "xicon",
    icon: "AppsOutline",
    parentPath: "",
    children: [
      {
        parentPath: "/other",
        menuUrl: "/other/chart",
        menuName: "图表",
        children: [
          {
            parentPath: "/other/chart",
            menuUrl: "/other/chart/icon",
            menuName: "图标",
            children: [
              {
                parentPath: "/other/chart/icon",
                menuUrl: "/other/chart/icon/icon-font",
                menuName: "IconFont",
              },
              {
                parentPath: "/other/chart/icon",
                menuUrl: "/other/chart/icon/xicons",
                menuName: "xicons",
                isRootPath: true,
              },
            ],
          },
          {
            parentPath: "/other/chart",
            menuUrl: "/other/chart/echarts",
            menuName: "echarts",
          },
          {
            parentPath: "/other/chart",
            menuUrl: "/other/chart/icon-selector",
            menuName: "图标选择器",
          },
        ],
      },
      {
        parentPath: "/other",
        menuUrl: "/other/print",
        menuName: "打印",
      },
      {
        parentPath: "/other",
        menuUrl: "/other/badge",
        menuName: "消息提示",
      },
      {
        parentPath: "/other",
        menuUrl: "/other/clipboard",
        menuName: "剪贴板",
      },
      {
        parentPath: "/other",
        menuUrl: "http://www.vueadminwork.com",
        menuName: "外链",
      },
      {
        parentPath: "/other",
        menuUrl: "/other/qrcode",
        menuName: "二维码",
      },
      {
        parentPath: "/other",
        menuUrl: "/other/css-animation",
        menuName: "CSS动画",
      },
      {
        parentPath: "/other",
        menuUrl: "/other/flow",
        menuName: "流程图",
      },
      {
        parentPath: "/other",
        menuUrl: "/other/player",
        menuName: "视频播放器",
      },
      {
        parentPath: "/other",
        menuUrl: "/other/password-strong",
        menuName: "密码强度",
      },
      {
        parentPath: "/other",
        menuUrl: "/other/cropper",
        menuName: "图片裁剪",
      },
      {
        parentPath: "/other",
        menuUrl: "/other/iframe",
        menuName: "内嵌iframe",
      },
      {
        parentPath: "/other",
        menuUrl: "/other/big-preview",
        menuName: "大图预览",
      },
      {
        parentPath: "/other",
        menuUrl: "/other/city-selector",
        menuName: "省市区选择器",
      },
    ],
  },
  {
    menuUrl: "/next",
    menuName: "多级菜单",
    iconPrefix: "xicon",
    icon: "ShareSocialOutline",
    parentPath: "",
    children: [
      {
        parentPath: "/next",
        menuUrl: "/next/menu1",
        menuName: "menu-1",
        cacheable: true,
      },
      {
        parentPath: "/next",
        menuUrl: "/next/menu2",
        menuName: "menu-2",
        children: [
          {
            parentPath: "/next/menu2",
            menuUrl: "/next/menu2/menu-2-1",
            menuName: "menu-2-1",
            children: [
              {
                parentPath: "/next/menu2/menu-2-1",
                menuUrl: "/next/menu2/menu-2-1/menu-2-1-1",
                menuName: "menu-2-1-1",
                cacheable: true,
              },
              {
                parentPath: "/next/menu2/menu-2-1",
                menuUrl: "/next/menu2/menu-2-1/menu-2-1-2",
                menuName: "menu-2-1-2",
                isRootPath: true,
              },
            ],
          },
          {
            parentPath: "/next/menu2",
            menuUrl: "/next/menu2/menu-2-2",
            menuName: "menu-2-2",
            cacheable: true,
          },
        ],
      },
    ],
  },
  {
    menuUrl: "/map",
    menuName: "地图",
    iconPrefix: "xicon",
    icon: "LocationOutline",
    children: [
      {
        parentPath: "/map",
        menuUrl: "/map/gaode",
        menuName: "高德地图",
      },
      {
        parentPath: "/map",
        menuUrl: "/map/baidu",
        menuName: "百度地图",
      },
    ],
  },
  {
    menuUrl: "/project",
    menuName: "项目信息",
    iconPrefix: "xicon",
    icon: "ColorPaletteOutline",
    isSingle: true,
    children: [
      {
        parentPath: "/project",
        menuUrl: "/project/infomation",
        iconPrefix: "xicon",
        icon: "LogoCodepen",
        menuName: "项目依赖",
      },
    ],
  },
];

Mock.mock(RegExp(getMenuList), "post", function () {
  return Mock.mock({ code: 200, data: adminRoutes, msg: "获取菜单列表成功" });
});
