import request from '~/utils/request'

export const getMenuListApi = () =>
  request({
    url: '/api/v1/menus',
    method: 'get'
  })
