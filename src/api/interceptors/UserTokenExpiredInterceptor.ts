import { AxiosResponse } from 'axios'
import { MessageApi } from 'naive-ui'

export default function (response: AxiosResponse, message: MessageApi): AxiosResponse {
  if (response.status === 200) {
    if (response.data.code === 400) {
      message.error('当前用户登录已过期，请重新登录')
      setTimeout(() => {
        window.location.reload()
      }, 1500)
    }
  }
  return response
}
