import request from '~/utils/request'

export const getTagListApi = (params: any) =>
  request({
    url: '/api/v1/tags',
    method: 'get',
    params
  })
