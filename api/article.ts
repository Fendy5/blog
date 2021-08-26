import request from '~/utils/request'

export const getArticleListApi = (params?: any) =>
  request({
    url: '/api/v1/articles',
    method: 'get',
    params
  })

export const getArticleApi = (id: string) =>
  request({
    url: `/api/v1/articles/${id}`,
    method: 'get'
  })
