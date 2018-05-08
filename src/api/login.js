import request from '@/utils/request'

export function login(userInfo) {
  return request({
    url: '/login',
    method: 'post',
    data: userInfo
  })
}

export function getInfo() {
  return request({
    url: '/cmsUser/getInfo',
    method: 'post'
  })
}

export function logout() {
  return request({
    url: '/logout',
    method: 'post'
  })
}

export function checkIp(ipAddress) {
  return request({
    url: '/checkIp',
    method: 'post',
    data: ipAddress
  })
}