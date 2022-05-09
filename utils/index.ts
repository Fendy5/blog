const dataFormat = (time: string): string => {
  return time.split('T')[0]
}
const isMobile = () => {
  return window.screen.width < 768
}

export { dataFormat, isMobile }
