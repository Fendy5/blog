import request from '~/utils/request'

export const getArticleListApi = (data?: any) =>
  request({
    url: '/api/v1/articles',
    method: 'get',
    data
  })

export const getArticleApi = (id: string) =>
  request({
    url: `/api/v1/articles/${id}`,
    method: 'get'
  })
