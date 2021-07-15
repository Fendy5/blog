import request from '~/utils/request'

export const getArticleListApi = () =>
  request({
    url: '/api/v1/articles',
    method: 'get'
  })
