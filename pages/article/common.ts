export const processArticleList = (value: any) => {
  const data = value.data
  const { total, per_page, current_page } = data
  const page = { total, per_page, current_page }
  return { articleList: data.data, page }
}
