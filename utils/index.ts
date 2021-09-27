const dataFormat = (time: string): string => {
  return time.split('T')[0]
}

export { dataFormat }
