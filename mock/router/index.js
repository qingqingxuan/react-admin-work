import { getMenuList } from '@/api/url'
import Mock from 'mockjs'

export const adminRoutes = [
  {
    menuUrl: '/index',
    menuName: 'Dashborad',
    routeName: 'dashborad',
    icon: 'icon-dashboard',
    parentPath: '',
    children: [
      {
        parentPath: '/index',
        menuUrl: '/index/home',
        menuName: '主控台',
        routeName: 'home',
      },
      {
        parentPath: '/index',
        menuUrl: '/index/work-place',
        menuName: '工作台',
        routeName: 'workPlace',
        isRootPath: true,
      },
      {
        parentPath: '/index',
        menuUrl: '/index/tabbar',
        menuName: '标签栏操作',
      },
    ],
  },
  {
    menuUrl: '/system',
    menuName: '系统管理',
    iconPrefix: 'xicon',
    icon: 'SettingsOutline',
    parentPath: '',
    children: [
      {
        parentPath: '/system',
        menuUrl: '/system/department',
        menuName: '部门管理',
        buttonList: [
          {
            name: '添加',
            code: 'add',
            roleCode: 'ROLE_admin',
            placement: 'top',
            type: 'primary',
          },
          {
            name: '编辑',
            code: 'update',
            roleCode: 'ROLE_admin',
            placement: 'tableLine',
            type: 'warning',
          },
          {
            name: '删除',
            code: 'delete',
            roleCode: 'ROLE_all',
            placement: 'tableLine',
            type: 'error',
          },
        ],
      },
      {
        parentPath: '/system',
        menuUrl: '/system/user',
        menuName: '用户管理',
        buttonList: [
          {
            name: '添加',
            code: 'add',
            roleCode: 'ROLE_admin',
            placement: 'top',
            type: 'primary',
          },
          {
            name: '编辑',
            code: 'update',
            roleCode: 'ROLE_admin',
            placement: 'tableLine',
            type: 'warning',
          },
          {
            name: '删除',
            code: 'delete',
            roleCode: 'ROLE_admin',
            placement: 'default',
            type: 'error',
          },
        ],
      },
      {
        parentPath: '/system',
        menuUrl: '/system/role',
        menuName: '角色管理',
        buttonList: [
          {
            name: '添加角色',
            code: 'add',
            roleCode: 'ROLE_admin',
            placement: 'top',
            type: 'primary',
            icon: 'AddOutline',
          },
          {
            name: '编辑',
            code: 'update',
            roleCode: 'ROLE_admin',
            placement: 'tableLine',
            type: 'warning',
            icon: 'CreateOutline',
          },
          {
            name: '删除',
            code: 'delete',
            roleCode: 'ROLE_admin',
            placement: 'tableLine',
            type: 'error',
            icon: 'TrashOutline',
          },
          {
            name: '菜单管理',
            code: 'menu',
            roleCode: 'ROLE_admin',
            placement: 'tableLine',
            type: 'success',
            icon: 'MenuOutline',
          },
        ],
      },
      {
        parentPath: '/system',
        menuUrl: '/system/menu',
        menuName: '菜单管理',
        buttonList: [
          {
            name: '添加',
            code: 'add',
            roleCode: 'ROLE_admin',
            placement: 'top',
            type: 'primary',
          },
          {
            name: '编辑',
            code: 'update',
            roleCode: 'ROLE_admin',
            placement: 'tableLine',
            type: 'warning',
          },
          {
            name: '删除',
            code: 'delete',
            roleCode: 'ROLE_admin',
            placement: 'tableLine',
            type: 'error',
          },
          {
            name: '按钮管理',
            code: 'button',
            roleCode: 'ROLE_admin',
            placement: 'tableLine',
            type: 'success',
          },
        ],
      },
    ],
  },
  {
    menuUrl: '/list',
    menuName: '表格页面',
    iconPrefix: 'xicon',
    icon: 'ListOutline',
    parentPath: '',
    badge: 'new',
    children: [
      {
        parentPath: '/list',
        menuUrl: '/list/basic-table',
        menuName: '基础表格',
      },
      {
        parentPath: '/list',
        menuUrl: '/list/use-table',
        menuName: 'useTable',
      },
      {
        parentPath: '/list',
        menuUrl: '/list/form-table',
        menuName: '表单表格',
      },
      {
        parentPath: '/list',
        menuUrl: '/list/table-title',
        menuName: '表格标题',
      },
      {
        parentPath: '/list',
        menuUrl: '/list/table-setting',
        menuName: '表格设置',
      },
      {
        parentPath: '/list',
        menuUrl: '/list/table-summary',
        menuName: '表格总结栏',
      },
      {
        parentPath: '/list',
        menuUrl: '/list/table-height',
        menuName: '表格高度',
      },
      {
        parentPath: '/list',
        menuUrl: '/list/tree-table',
        menuName: '树型表格',
      },
      {
        parentPath: '/list',
        menuUrl: '/list/check-table',
        menuName: '选择表格',
      },
      {
        parentPath: '/list',
        menuUrl: '/list/index-table',
        menuName: '序号表格',
      },
      {
        parentPath: '/list',
        menuUrl: '/list/filter-order',
        menuName: '过滤排序',
      },
    ],
  },
  {
    menuUrl: '/form',
    menuName: '表单页面',
    iconPrefix: 'xicon',
    icon: 'CreateOutline',
    parentPath: '',
    badge: 'new',
    children: [
      {
        parentPath: '/form',
        menuUrl: '/form/basic-form',
        menuName: '基础表单',
      },
      {
        parentPath: '/form',
        menuUrl: '/form/grid-form',
        menuName: '栅格化表单',
      },
      {
        parentPath: '/form',
        menuUrl: '/form/use-form',
        menuName: 'useForm',
      },
      {
        parentPath: '/form',
        menuUrl: '/form/set-form',
        menuName: '表单设置',
      },
      {
        parentPath: '/form',
        menuUrl: '/form/rebind-form',
        menuName: '回显表单',
      },
    ],
  },
  {
    menuUrl: '/other',
    menuName: '功能/组件',
    iconPrefix: 'xicon',
    icon: 'AppsOutline',
    parentPath: '',
    children: [
      {
        parentPath: '/other',
        menuUrl: '/other/chart',
        menuName: '图表',
        iconPrefix: 'svg',
        icon: 'data-chart',
        children: [
          {
            parentPath: '/other/chart',
            menuUrl: '/other/chart/icon',
            menuName: '图标',
            children: [
              {
                parentPath: '/other/chart/icon',
                menuUrl: '/other/chart/icon/icon-font',
                menuName: 'IconFont',
              },
              {
                parentPath: '/other/chart/icon',
                menuUrl: '/other/chart/icon/xicons',
                menuName: 'xicons',
              },
            ],
          },
          {
            parentPath: '/other/chart',
            menuUrl: '/other/chart/echarts',
            menuName: 'echarts',
          },
          {
            parentPath: '/other/chart',
            menuUrl: '/other/chart/icon-selector',
            menuName: '图标选择器',
          },
        ],
      },
      {
        parentPath: '/other',
        menuUrl: '/other/print',
        menuName: '打印',
      },
      {
        parentPath: '/other',
        menuUrl: '/other/badge',
        menuName: '消息提示',
      },
      {
        parentPath: '/other',
        menuUrl: '/other/clipboard',
        menuName: '剪贴板',
      },
      {
        parentPath: '/other',
        menuUrl: 'http://www.vueadminwork.com',
        menuName: '外链',
      },
      {
        parentPath: '/other',
        menuUrl: '/other/qrcode',
        menuName: '二维码',
      },
      {
        parentPath: '/other',
        menuUrl: '/other/css-animation',
        menuName: 'CSS动画',
      },
      {
        parentPath: '/other',
        menuUrl: '/other/flow',
        menuName: '流程图',
      },
      {
        parentPath: '/other',
        menuUrl: '/other/player',
        menuName: '视频播放器',
      },
      {
        parentPath: '/other',
        menuUrl: '/other/password-strong',
        menuName: '密码强度',
      },
      {
        parentPath: '/other',
        menuUrl: '/other/cropper',
        menuName: '图片裁剪',
      },
      {
        parentPath: '/other',
        menuUrl: '/other/iframe',
        menuName: '内嵌iframe',
      },
      {
        parentPath: '/other',
        menuUrl: '/other/big-preview',
        menuName: '大图预览',
      },
      {
        parentPath: '/other',
        menuUrl: '/other/city-selector',
        menuName: '省市区选择器',
      },
    ],
  },
  {
    menuUrl: '/route-params',
    menuName: '路由参数',
    iconPrefix: 'xicon',
    icon: 'HelpCircleOutline',
    parentPath: '',
    children: [
      {
        parentPath: '/route-params',
        menuUrl: '/route-params/query',
        menuName: 'query参数',
      },
      {
        parentPath: '/route-params',
        menuUrl: '/route-params/params',
        menuName: 'params参数',
      },
    ],
  },
  {
    menuUrl: '/result',
    menuName: '结果页面',
    iconPrefix: 'xicon',
    icon: 'InformationCircleOutline',
    parentPath: '',
    children: [
      {
        parentPath: '/result',
        menuUrl: '/result/success',
        menuName: '成功页面',
      },
      {
        parentPath: '/result',
        menuUrl: '/result/fail',
        menuName: '失败页面',
      },
    ],
  },
  // {
  //   menuUrl: '/exception',
  //   menuName: '异常页面',
  //   iconPrefix: 'iconfont',
  //   icon: 'error',
  //   parentPath: '',
  //   children: [
  //     {
  //       parentPath: '/exception',
  //       menuUrl: '/exception/404',
  //       menuName: '404页面',
  //     },
  //     {
  //       parentPath: '/exception',
  //       menuUrl: '/exception/403',
  //       menuName: '403页面',
  //     },
  //     {
  //       parentPath: '/exception',
  //       menuUrl: '/exception/500',
  //       menuName: '500页面',
  //     },
  //   ],
  // },
  {
    menuUrl: '/editor',
    menuName: '编辑器',
    iconPrefix: 'xicon',
    icon: 'CodeSlashSharp',
    parentPath: '',
    children: [
      {
        parentPath: '/editor',
        menuUrl: '/editor/rich-text',
        menuName: '富文本',
      },
      {
        parentPath: '/editor',
        menuUrl: '/editor/markdown',
        menuName: 'markdown',
      },
    ],
  },
  {
    menuUrl: '/excel',
    menuName: 'Excel',
    iconPrefix: 'xicon',
    icon: 'ExitOutline',
    parentPath: '',
    children: [
      {
        parentPath: '/excel',
        menuUrl: '/excel/export-excel',
        menuName: '导出Excel',
      },
      {
        parentPath: '/excel',
        menuUrl: '/excel/export-rows-excel',
        menuName: '导出选中行',
      },
    ],
  },
  {
    menuUrl: '/draggable',
    menuName: '拖拽',
    iconPrefix: 'xicon',
    icon: 'MoveOutline',
    parentPath: '',
    children: [
      // {
      //   parentPath: '/draggable',
      //   menuUrl: '/draggable/dialog-draggable',
      //   menuName: '拖拽对话框',
      // },
      {
        parentPath: '/draggable',
        menuUrl: '/draggable/card-draggable',
        menuName: '卡片拖拽',
        cacheable: true,
      },
    ],
  },
  {
    menuUrl: '/next',
    menuName: '多级菜单',
    iconPrefix: 'xicon',
    icon: 'ShareSocialOutline',
    parentPath: '',
    children: [
      {
        parentPath: '/next',
        menuUrl: '/next/menu1',
        menuName: 'menu-1',
        cacheable: true,
      },
      {
        parentPath: '/next',
        menuUrl: '/next/menu2',
        menuName: 'menu-2',
        children: [
          {
            parentPath: '/next/menu2',
            menuUrl: '/next/menu2/menu-2-1',
            menuName: 'menu-2-1',
            children: [
              {
                parentPath: '/next/menu2/menu-2-1',
                menuUrl: '/next/menu2/menu-2-1/menu-2-1-1',
                menuName: 'menu-2-1-1',
                cacheable: true,
              },
              {
                parentPath: '/next/menu2/menu-2-1',
                menuUrl: '/next/menu2/menu-2-1/menu-2-1-2',
                menuName: 'menu-2-1-2',
              },
            ],
          },
          {
            parentPath: '/next/menu2',
            menuUrl: '/next/menu2/menu-2-2',
            menuName: 'menu-2-2',
            cacheable: true,
          },
        ],
      },
    ],
  },
  {
    menuUrl: '/map',
    menuName: '地图',
    iconPrefix: 'xicon',
    icon: 'LocationOutline',
    children: [
      {
        parentPath: '/map',
        menuUrl: '/map/gaode',
        menuName: '高德地图',
      },
      {
        parentPath: '/map',
        menuUrl: '/map/baidu',
        menuName: '百度地图',
      },
    ],
  },
  {
    menuUrl: '/project',
    menuName: '项目信息',
    iconPrefix: 'xicon',
    icon: 'ColorPaletteOutline',
    isSingle: true,
    children: [
      {
        parentPath: '/project',
        menuUrl: '/project/infomation',
        iconPrefix: 'xicon',
        icon: 'LogoCodepen',
        menuName: '项目依赖',
      },
    ],
  },
]
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
    menuUrl: '/other',
    menuName: '功能/组件',
    iconPrefix: 'xicon',
    icon: 'AppsOutline',
    parentPath: '',
    children: [
      {
        parentPath: '/other',
        menuUrl: '/other/chart',
        menuName: '图表',
        children: [
          {
            parentPath: '/other/chart',
            menuUrl: '/other/chart/icon',
            menuName: '图标',
            children: [
              {
                parentPath: '/other/chart/icon',
                menuUrl: '/other/chart/icon/icon-font',
                menuName: 'IconFont',
              },
              {
                parentPath: '/other/chart/icon',
                menuUrl: '/other/chart/icon/xicons',
                menuName: 'xicons',
                isRootPath: true,
              },
            ],
          },
          {
            parentPath: '/other/chart',
            menuUrl: '/other/chart/echarts',
            menuName: 'echarts',
          },
          {
            parentPath: '/other/chart',
            menuUrl: '/other/chart/icon-selector',
            menuName: '图标选择器',
          },
        ],
      },
      {
        parentPath: '/other',
        menuUrl: '/other/print',
        menuName: '打印',
      },
      {
        parentPath: '/other',
        menuUrl: '/other/badge',
        menuName: '消息提示',
      },
      {
        parentPath: '/other',
        menuUrl: '/other/clipboard',
        menuName: '剪贴板',
      },
      {
        parentPath: '/other',
        menuUrl: 'http://www.vueadminwork.com',
        menuName: '外链',
      },
      {
        parentPath: '/other',
        menuUrl: '/other/qrcode',
        menuName: '二维码',
      },
      {
        parentPath: '/other',
        menuUrl: '/other/css-animation',
        menuName: 'CSS动画',
      },
      {
        parentPath: '/other',
        menuUrl: '/other/flow',
        menuName: '流程图',
      },
      {
        parentPath: '/other',
        menuUrl: '/other/player',
        menuName: '视频播放器',
      },
      {
        parentPath: '/other',
        menuUrl: '/other/password-strong',
        menuName: '密码强度',
      },
      {
        parentPath: '/other',
        menuUrl: '/other/cropper',
        menuName: '图片裁剪',
      },
      {
        parentPath: '/other',
        menuUrl: '/other/iframe',
        menuName: '内嵌iframe',
      },
      {
        parentPath: '/other',
        menuUrl: '/other/big-preview',
        menuName: '大图预览',
      },
      {
        parentPath: '/other',
        menuUrl: '/other/city-selector',
        menuName: '省市区选择器',
      },
    ],
  },
  {
    menuUrl: '/next',
    menuName: '多级菜单',
    iconPrefix: 'xicon',
    icon: 'ShareSocialOutline',
    parentPath: '',
    children: [
      {
        parentPath: '/next',
        menuUrl: '/next/menu1',
        menuName: 'menu-1',
        cacheable: true,
      },
      {
        parentPath: '/next',
        menuUrl: '/next/menu2',
        menuName: 'menu-2',
        children: [
          {
            parentPath: '/next/menu2',
            menuUrl: '/next/menu2/menu-2-1',
            menuName: 'menu-2-1',
            children: [
              {
                parentPath: '/next/menu2/menu-2-1',
                menuUrl: '/next/menu2/menu-2-1/menu-2-1-1',
                menuName: 'menu-2-1-1',
                cacheable: true,
              },
              {
                parentPath: '/next/menu2/menu-2-1',
                menuUrl: '/next/menu2/menu-2-1/menu-2-1-2',
                menuName: 'menu-2-1-2',
                isRootPath: true,
              },
            ],
          },
          {
            parentPath: '/next/menu2',
            menuUrl: '/next/menu2/menu-2-2',
            menuName: 'menu-2-2',
            cacheable: true,
          },
        ],
      },
    ],
  },
  {
    menuUrl: '/map',
    menuName: '地图',
    iconPrefix: 'xicon',
    icon: 'LocationOutline',
    children: [
      {
        parentPath: '/map',
        menuUrl: '/map/gaode',
        menuName: '高德地图',
      },
      {
        parentPath: '/map',
        menuUrl: '/map/baidu',
        menuName: '百度地图',
      },
    ],
  },
  {
    menuUrl: '/project',
    menuName: '项目信息',
    iconPrefix: 'xicon',
    icon: 'ColorPaletteOutline',
    isSingle: true,
    children: [
      {
        parentPath: '/project',
        menuUrl: '/project/infomation',
        iconPrefix: 'xicon',
        icon: 'LogoCodepen',
        menuName: '项目依赖',
      },
    ],
  },
]

Mock.mock(RegExp(getMenuList), 'post', function () {
  return Mock.mock({ code: 200, data: adminRoutes, msg: '获取菜单列表成功' })
})
