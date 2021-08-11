import request from '~/utils/request'

export const getCategoryListApi = (params: any) =>
  request({
    url: '/api/v1/menus',
    method: 'get',
    params
  })
