if (process.client && process.env.NODE_ENV === 'production') {
  (function () {
    const hm = document.createElement('script')
    hm.src = 'https://hm.baidu.com/hm.js?faa3224cf995a41f8f0928347cc1a7c4'
    const s = document.getElementsByTagName('script')[0]
    s.parentNode!.insertBefore(hm, s)
  })()
}
