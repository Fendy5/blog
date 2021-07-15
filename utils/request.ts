import axios from 'axios'
import { Message } from 'element-ui'

const service = axios.create({
  baseURL: process.env.BASE_URL,
  timeout: 150000
})

service.interceptors.response.use(
  (response) => {
    const res = response.data
    // code-0,请求成功；code-1，未登录；code-2,服务器返回失败信息
    if (res.code === 0) {
      res.message && Message({
        message: res.message
      })
      return res
    } else if (res.code === 2) {
      // 请求错误弹窗
      Message({
        type: 'error',
        message: res.message
      })
      return Promise.reject(res)
    }
  },
  (error) => {
    // 请求错误弹窗
    Message({
      type: 'error',
      message: error.message
    })
    return Promise.reject(error)
  }
)

export default service
