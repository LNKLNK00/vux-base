import axios from 'axios'
import store from '../store'

// 创建axios实例
const service = axios.create({
  baseURL: process.env.BASE_API, // api的base_url
  timeout: 15000 // 请求超时时间
})

// request拦截器
service.interceptors.request.use(config => {
  config.withCredentials = true
  return config
}, error => {
  // Do something with request error
  console.log(error) // for debug
  Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use(
  response => {
    const res = response.data
    if (res.status === -1) {
      MessageBox.confirm('你已被登出，可以取消继续留在该页面，或者重新登录', '确定登出', {
        confirmButtonText: '重新登录',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        store.dispatch('FedLogOut').then(() => {
          location.reload()
        })
      })
    } else if (res.status === 1) {
      return res
    } else {
      if (res.code === '9000') {
        Message({
          message: "参数错误",
          type: 'error',
          duration: 3 * 1000
        })
      }
      if (res.code === '3333') {
        Message({
          message: "无权访问",
          type: 'error',
          duration: 3 * 1000
        })
      }
      if (res.code === '9999') {
        Message({
          message: "系统异常",
          type: 'error',
          duration: 3 * 1000
        })
      }
      return res
    }
  },
  error => {
    console.log('err' + error)
    Message({
      message: error.message,
      type: 'error',
      duration: 3 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
