import request from '~/utils/request'

export const getArticleListApi = () =>
  request({
    url: '/api/v1/articles',
    method: 'get'
  })

export const getArticleApi = (id: string) =>
  request({
    url: `/api/v1/articles/${id}`,
    method: 'get'
  })
