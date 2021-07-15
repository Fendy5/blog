declare module '*.svg' {
  const content: any
  export default content
}

export interface RequireContext { resolve: Function, keys: Function, id: string | number | null }
