import { getMenuListByRoleId, getAllMenuByRoleId, login, updateUserInfo } from '@/api/url'
import Mock from 'mockjs'
import { nanoid } from 'nanoid'
import { baseData } from '../base.ts'
import { adminRoutes, editorRoutes } from '../router'

Mock.mock(RegExp(login), 'post', function (options) {
  const username = JSON.parse(options.body).username
  const data = {}
  if (username === 'admin') {
    baseData.code = 200
    baseData.msg = '登录成功'
    data.nickName = '超级管理员'
    data.userName = 'admin'
    data.userId = 1
    data.roleId = 1
    data.token = nanoid()
    data.roles = [
      {
        roleCode: 'ROLE_admin',
        roleId: 1,
        roleName: '超级管理员',
      },
    ]
    baseData.data = data
  } else if (username === 'editor') {
    baseData.code = 200
    baseData.msg = '登录成功'
    data.nickName = '编辑员'
    data.userName = 'editor'
    data.userId = 2
    data.roleId = 2
    data.token = randomString(100)
    data.roles = [
      {
        roleCode: 'ROLE_editor',
        roleId: 2,
        roleName: '网站编辑人员',
      },
    ]
    baseData.data = data
  } else {
    baseData.code = 500
    baseData.data = ''
    baseData.msg = '用户名或密码错误'
  }
  return Mock.mock(baseData)
})

Mock.mock(RegExp(getAllMenuByRoleId), 'post', function () {
  const allRoutes = [...adminRoutes]
  return Mock.mock({ code: 200, data: allRoutes, msg: '获取菜单列表成功' })
})

Mock.mock(RegExp(getMenuListByRoleId), 'post', function (options) {
  const roleId = JSON.parse(options.body).roleId || ''
  if (!roleId) {
    return Mock.mock({ code: 500, data: '', msg: '获取菜单列表失败' })
  }
  if (parseInt(roleId) === 1) {
    // 超级管理员
    return Mock.mock({ code: 200, data: adminRoutes, msg: '获取菜单列表成功' })
  } else if (parseInt(roleId) === 2) {
    // 编辑
    return Mock.mock({
      code: 200,
      data: editorRoutes,
      msg: '获取菜单列表成功',
    })
  } else {
    return Mock.mock({
      code: 500,
      data: '',
      msg: '目前仅支持超级管理员和编辑人员菜单',
    })
  }
})

Mock.mock(RegExp(updateUserInfo), 'post', function () {
  return Mock.mock({ ...baseData, msg: '更新信息成功' })
})
