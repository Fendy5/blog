import { Page } from '~/types'

export const processArticleList = (value: any) => {
  const data = value.data
  const page: Page = {
    total: data.total,
    per_page: parseInt(data.per_page),
    current_page: data.current_page
  }
  return { articleList: data.data, page }
}
