export interface Article {
  article_id: string
  cover: string
  title: string
  month: string
  day: string
  summary: string
}

export interface Page {
  total: number
  per_page: number
  current_page: number
}

export interface Head {
  title: string
}
